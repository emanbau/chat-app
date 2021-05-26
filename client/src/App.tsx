import React from 'react';
import './App.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error';
import { useAppSelector, useAppDispatch } from './Redux/reduxhooks';
import { login } from './Redux/loggedin';
import Login from './pages/Login';
import Messenger from './pages/Messenger';

// Apollo Client Setup
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }: any) => {
      console.log(`GraphQL error ${message}`);
      return null;
    });
  }
  if (networkError) {
    console.log(networkError);
  }
});

const link = from([
  errorLink, 
  new HttpLink({ uri: "http://localhost:3001/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})


const App: React.FC = () => {
  // Redux States & Reducers
  const loggedin = useAppSelector(state => state.loggedin.loggedin);
  const dispatch = useAppDispatch();

  // Logged in handler
  const loginHandle: () => void = () => {
    dispatch(login());
  }

  return (
    
    <ApolloProvider client={client}>
      <div className="App">
        {!loggedin ? (
            <Login loginHandle={loginHandle} />
          ) : (
            <Messenger />
          )
        }
      </div>
    </ApolloProvider>
  );
}

export default App;
