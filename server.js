import { ApolloServer, gql } from "apollo-server";
// 🍨 const { ApolloServer, gql } = require("apollo-server"); // package.json에 type을 module로 주지 않으면 import문을 사용할 수 없다.

/**
 * 🍨 ` `안에 작성 할 내용을 SDL (Schema definition language)이라 한다. Data의 Shape(모양)을 설명해야 한다.
 * type Query { ... } : Schema를 표현하기 위한 공식
 * text: String은 Rest API로 URL로 나타내면 'GET /text'과 같다.
 */
const typeDefs = gql`
  type Query {
    text: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

// 🍨 promise문법은 then과 함께 쓰이며 pending(대기), fulfilled(이행), rejected(거부)에 따른 작업을 호출 받는다.
