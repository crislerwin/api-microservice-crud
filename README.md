# CRUD (Create, Read, Update & Delete) API with NestJS and Docker

## Sobre o Projeto

Esta aplicação utiliza o framework NodeJS MVC(Model,View & Controller) **NestJS**, escrevendo em
tabelas no banco de dados **PostgreSQL**.

## Arquitetura

Em microsserviços utilizando o **Docker** como container runtime, tanto para a aplicação quanto
para o banco de dados, porém irá salvar os dados em HD para não crescer o container.

## Dependencias

- @nestjs/config
- pg
- typeorm

## Tecnologias

- Node.js
- Typescript
- PostgreSQL
- Docker

## Execução

Necessita ter o Docker e Docker-Compose instalados

```
git clone https://github.com/crislerwin/crud-mvc-api.git
sudo docker-compose up --build
```
