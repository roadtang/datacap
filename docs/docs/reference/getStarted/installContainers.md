---
title: 在 Docker 中部署
---

DataCap 项目提供 [qianmoq/datacap](https://hub.docker.com/r/qianmoq/datacap) 包含 DataCap 服务器和默认配置的 Docker 映像。Docker 映像发布到 Docker Hub，可以与 Docker 运行时等一起使用。

### 运行容器

要在 Docker 中运行 DataCap，您必须在计算机上安装 Docker 引擎。您可以从 [Docker website](Docker website), 或使用操作系统的打包系统。

使用 docker 命令从 [qianmoq/datacap](https://hub.docker.com/r/qianmoq/datacap) 图像。为其分配数据帽名称，以便以后更容易引用它。在后台运行它，并将默认 DataCap 端口（即 `9096`）从容器内部映射到工作站上的端口 `9096`。

```bash
docker run -d -p 9909:9096 --name datacap qianmoq/datacap
```

如果不指定容器映像标记，则默认为 `latest` ，但可以使用许多已发布的 DataCap 版本，例如 `qianmoq/datacap:1.17.0`。

!!! danger

    如果是新版本，已经不再支持 H2 数据库，需要挂在外接 MySQL 配置，服务启动的方式可以修改为

    ```bash
    docker run -d -p 9096:9096 -v /root/application.properties:/opt/app/datacap/configure/application.properties --name datacap qianmoq/datacap
    ```

    假设您的配置文件在 `/root/application.properties`，如需要其他路径请指定绝对路径即可。

运行 `docker ps` 以查看在后台运行的所有容器。

```bash
-> % docker ps
CONTAINER ID   IMAGE                    COMMAND               CREATED      STATUS          PORTS                    NAMES
2096fba19e2a   datacap:latest           "sh ./bin/debug.sh"   5 days ago   Up 14 seconds   0.0.0.0:9909->9096/tcp   datacap
```

### 清理

您可以使用 `docker stop datacap` 和 `docker start datacap` 命令停止和启动容器。要完全删除已停止的容器，请运行 `docker rm datacap`。
