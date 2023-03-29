# k8s deployment 命令行调整镜像版本

在 Kubernetes (k8s) 中，要通过命令行调整 Deployment 的镜像版本，你可以使用 `kubectl set image` 命令。这里是一个示例：

```
kubectl set image deployment/<deployment-name> <container-name>=<new-image>:<new-tag> --record
```

请将以下部分替换为你的实际值：

* `<deployment-name>`: 要更新的 Deployment 的名称。
* `<container-name>`: 要更新的容器名称。如果你的 Deployment 只有一个容器，通常可以直接使用 Deployment 的名称。
* `<new-image>`: 新镜像的名称。
* `<new-tag>`: 新镜像的标签或版本。

`--record` 标志是可选的，用于记录当前命令以便跟踪历史更改。

假设你有一个名为 `my-app` 的 Deployment，它有一个名为 `my-container` 的容器，你想要更新镜像为 `my-image` 版本 `v2`，你可以使用以下命令：

```
kubectl set image deployment/my-app my-container=my-image:v2 --record
```

在执行此命令后，Kubernetes 会更新 Deployment 配置，并执行滚动更新以逐步替换旧的 Pod。
