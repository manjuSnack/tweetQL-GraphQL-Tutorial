import { ApolloServer, gql } from "apollo-server";

// 🍨 const { ApolloServer, gql } = require("apollo-server"); // package.json에 type을 module로 주지 않으면 import문을 사용할 수 없다.

const server = new ApolloServer({});

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

// 🍨 promise문법은 then과 함께 쓰이며 pending(대기), fulfilled(이행), rejected(거부)에 따른 작업을 호출 받는다.
