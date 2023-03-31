# kubernetes新增远程公网访问server配置



要使 Kubernetes 集群支持公网访问，需要配置 LoadBalancer 服务或使用 Ingress 控制器。这两种方法都可以将流量路由到集群内部的服务。以下是两种方法的详细说明：

1.  使用 LoadBalancer 服务：

创建一个类型为 LoadBalancer 的 Kubernetes 服务，以将流量从公网转发到集群内部的服务。以下是一个简单的 YAML 示例：



```
apiVersion: v1
kind: Service
metadata:
  name: my-public-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

将此 YAML 文件保存为 `my-public-service.yaml`，然后使用 `kubectl apply -f my-public-service.yaml` 命令创建服务。

请注意，当你在云服务提供商（如 AWS、Google Cloud Platform 或 Microsoft Azure）上运行 Kubernetes 集群时，LoadBalancer 服务类型通常会自动创建一个云负载均衡器，并分配一个公网 IP。但如果你在裸金属服务器或私有数据中心上运行 Kubernetes 集群，可能需要使用像 MetalLB 这样的项目来实现 LoadBalancer 功能。

2.  使用 Ingress 控制器：

Ingress 是 Kubernetes 中的一个资源，可以用来将外部流量路由到集群内的服务。为了使用 Ingress，你需要先部署一个 Ingress 控制器。常见的 Ingress 控制器包括 Nginx、Traefik 和 HAProxy。以下是使用 Nginx Ingress 控制器的简要说明：

安装 Nginx Ingress 控制器（这里以 Helm 为例）：



```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install nginx-ingress ingress-nginx/ingress-nginx
```

创建一个 Ingress 资源，将流量路由到你的服务。以下是一个简单的 YAML 示例：



```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-public-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app
            port:
              number: 80
```

将此 YAML 文件保存为 `my-public-ingress.yaml`，然后使用 `kubectl apply -f my-public-ingress.yaml` 命令创建 Ingress 资源。

这将使所有发送到 example.com 的流量路由到名为 my-app 的服务。请注意，你需要将 example.com 替换为你的域名，并确保域名已指向 Ingress 控制器所在节点的公网 IP。

这两种方法都可以实现 Kubernetes 集群的远程公网访问。具体选择哪种方法取决于你的使用场景和需求。

