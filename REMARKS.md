# 実装プロセスメモ

## ディレクトリ構成

```c
root
├── application
│   ├── service（ApplicationService）
│   └── sharedservice（サービス間で使いたいサービス）
├── domain
│   ├── model（値オブジェクトなどを格納したオブジェクト）
│   ├── repository（インターフェース）
│   ├── service（DomainService）
│   └── value（値オブジェクトや区分オブジェクト）
├── infrastructure（repositoryの実態）
│   ├── composite（複数のdatasourceやexternalapiの結果を結合したりする場合に使用）
│   ├── datasource（DBなど）
│   ├── externalapi（外部APIなど）
│   └── transfer（外部ストレージなど）
└── presentation
    ├── controller
    ├── secutiry（認証関連やCSRFトークンなどの処理）
    └── interceptor（コントローラー共通処理）
```

## 初期実装コマンド類

- プロジェクト作成

```c
git clone https://github.com/nestjs/typescript-starter.git sales-management-api
```

- DBMSとしてMySQLをDockerで構築
- prisma導入

```c
yarn add prisma --dev
yarn prisma init
yarn add @nestjs/config
~~~~~
/prisma/schema.prismaでMySQLと接続するように修正
~~~~~
yarn prisma migrate dev --name init
```

## テストデータ登録(後でsetupコマンドにする)

- 実行SQL

```c
・Accountテストデータ登録
INSERT INTO Account(id, name, billingCity, billingPostalCode, billingState, billingStreet, corporateNumber, phone, representativeName, representativeTitle, shippingCity, shippingPostalCode, shippingState, shippingStreet, website) VALUE("ABC0123def", "株式会社テスト00", "墨田区", "131-0046", "東京都", "京島1-2-3 請求タワー6F", "0123456789012", "03-1234-5678", "代表者テスト", "代表取締役社長", "墨田区", "131-0046", "東京都", "京島1-2-3 納品タワー6F", "https://google.com");
```
