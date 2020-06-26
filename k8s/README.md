# Resources list for Canarytrace Pro

## Secrets
```
NAME                  TYPE                                  DATA   AGE
secret-aws            Opaque                                4      15d
secret-elastic        Opaque                                3      16d
secret-github         Opaque                                1      16d
secret-user           Opaque                                2      16d
```

## Configmaps
```
NAME                     DATA   AGE
canary-config            7      15d
canary-services          6      15d
```

## CronJob
```
NAME                                    READY   STATUS    RESTARTS   AGE
canary-documentation-1593157860-sqctk   2/2     Running   0          22s
```

**1). Login to via command line tool to DigitalOcean**

`doctl auth init`

**2). Create k8s cluter via terraform on DigitalOcean platform**
- [Terraform introduction](https://www.terraform.io/intro/index.html)
- [Terraform DO k8s configuration](https://github.com/rdpanek/tab-trenink/tree/master/tf-k8s)
```
terraform init && terraform apply -auto-approve
```

**3). Create resource secret aws**
```
kubectl create -f k8s/secret-aws.yml
```

**4). Create resource secret elastic**
```
kubectl create -f k8s/secret-elastic.yml
```

**5). Create resource secret user**
```
kubectl create -f k8s/secret-user.yml
```

**6). Create resource secret github**
```
kubectl create secret generic secret-github --from-file=ssh-privatekey=/Users/user/.ssh/id_rsa_no_pass
```

**7). Create resource secret dockerhub**
```
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=xyz --docker-password=xzy --docker-email=email@gmail.com
```

**8). Create resource config map**
```
kubectl create -f k8s/config-map.yml
```

**9). Create resource with monitor script**
```
kubectl create -f k8s/canary-documentation.yml
```
