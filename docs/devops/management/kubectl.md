# kubectl 通过 命令行登录



要通过命令行使用 `kubectl` 登录到 Kubernetes 集群，你需要先获取集群的访问凭据。这些凭据通常以 kubeconfig 文件的形式提供。在获取 kubeconfig 文件后，你可以使用 `kubectl` 命令与集群进行交互。以下是操作步骤：

1.  获取 kubeconfig 文件：通常，集群管理员会提供该文件。文件内容包括集群的 API 地址、证书信息等。

2.  设置 KUBECONFIG 环境变量：将 KUBECONFIG 环境变量设置为 kubeconfig 文件的路径。这样，`kubectl` 就会知道如何找到并使用正确的配置文件。在 Linux 或 macOS 系统上，你可以使用以下命令：




```
export KUBECONFIG=/path/to/your/kubeconfig.yaml
```

在 Windows 系统上，使用以下命令：



```
set KUBECONFIG=C:\path\to\your\kubeconfig.yaml
```

3.  测试连接：使用 `kubectl cluster-info` 命令测试与集群的连接是否正常。



```
kubectl cluster-info
```

如果连接成功，命令会返回集群的基本信息。

4.  使用 `kubectl` 命令与集群交互：现在，你已经成功登录到 Kubernetes 集群，可以使用各种 `kubectl` 命令来操作和管理集群。例如，你可以使用 `kubectl get nodes` 命令查看集群中的节点信息。

注意：如果你需要同时管理多个集群，可以在 KUBECONFIG 环境变量中指定多个配置文件，只需用冒号（Linux/macOS）或分号（Windows）分隔即可。




如果你的 server 配置的是局域网地址 `server: https://10.0.4.10:6443` 那么你可以通过 nginx 转换来规避掉这个问题

```nginx
server {
    listen 443 ssl http2;
    server_name k8s-api.jansora.com;

    ssl_protocols    TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate     /etc/nginx/certs/jansora.com/kubectl.jansora.com.pem;
    ssl_certificate_key /etc/nginx/certs/jansora.com/kubectl.jansora.com.key;

    location / {
          proxy_pass_header Server;
          proxy_set_header Host $http_host;
          proxy_redirect off;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Scheme $scheme;
          proxy_pass https://10.0.4.10:6443;
    }
}

```


kubeconfig 文件中 server 这么配置

```
- cluster:
    server: https://kubectl.jansora.com
    insecure-skip-tls-verify: true
```

就可以了