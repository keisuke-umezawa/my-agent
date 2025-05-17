# 開発環境のセットアップ

このドキュメントでは、My Agentプロジェクトの開発環境のセットアップ方法について説明します。

## 目次

- [前提条件](#前提条件)
- [開発環境のセットアップ](#開発環境のセットアップ)
  - [DevContainerを使用する方法](#devcontainerを使用する方法)
  - [ローカル環境でのセットアップ](#ローカル環境でのセットアップ)
- [開発ワークフロー](#開発ワークフロー)
- [テスト](#テスト)
- [コードスタイル](#コードスタイル)

## 前提条件

開発を始める前に、以下のツールがインストールされていることを確認してください：

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (バージョン20以上)
- [npm](https://www.npmjs.com/) (Node.jsに付属)

DevContainerを使用する場合は、以下も必要です：

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- [VS Code Remote - Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## 開発環境のセットアップ

### DevContainerを使用する方法

DevContainerを使用すると、すべての依存関係が設定された一貫した開発環境で作業できます。

1. リポジトリをクローンします：

```bash
git clone https://github.com/keisuke-umezawa/my-agent.git
cd my-agent
```

2. VS Codeでプロジェクトを開きます：

```bash
code .
```

3. VS Codeが`.devcontainer`フォルダを検出し、コンテナで再度開くように提案します。「Reopen in Container」をクリックします。
   - または、コマンドパレット（F1）を開き、「Remote-Containers: Reopen in Container」を選択します。

4. VS Codeがコンテナをビルドして開くのを待ちます。これには数分かかる場合があります。

これで、すべての必要な拡張機能と依存関係がインストールされた開発環境が整いました。

### ローカル環境でのセットアップ

DevContainerを使用しない場合は、以下の手順でローカル環境をセットアップできます：

1. リポジトリをクローンします：

```bash
git clone https://github.com/keisuke-umezawa/my-agent.git
cd my-agent
```

2. 依存関係をインストールします：

```bash
npm install
```

3. 開発サーバーを起動します：

```bash
npm run dev
```

これで、[http://localhost:5173](http://localhost:5173)でアプリケーションにアクセスできます。

## 開発ワークフロー

1. 新しい機能やバグ修正に取り組む前に、最新の`main`ブランチから新しいブランチを作成してください：

```bash
git checkout main
git pull
git checkout -b feature/your-feature-name
```

2. コードを変更し、定期的にコミットします：

```bash
git add <変更したファイル>
git commit -m "変更内容の説明"
```

3. 変更をプッシュします：

```bash
git push origin feature/your-feature-name
```

4. GitHubでプルリクエストを作成します。

## テスト

プロジェクトには以下のテストタイプがあります：

1. ユニットテスト：

```bash
npm run test:unit
```

2. E2Eテスト：

```bash
npm run test
```

3. 型チェック：

```bash
npm run typecheck
```

4. リント：

```bash
npm run lint
```

プルリクエストを作成する前に、すべてのテストが通過することを確認してください。

## コードスタイル

このプロジェクトでは、ESLintとPrettierを使用してコードスタイルを強制しています。コードをコミットする前に、以下のコマンドを実行してコードスタイルを確認してください：

```bash
npm run lint
```

VS CodeでDevContainerを使用している場合、ファイル保存時に自動的にフォーマットが適用されます。
