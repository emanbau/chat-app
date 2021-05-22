import React from 'react';
import './App.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error';
import { login, logout } from './Redux/loggedin';
import { useAppSelector, useAppDispatch } from './Redux/reduxhooks';

// Apollo Client Setup
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }: any) => {
      alert(`GraphQL error ${message}`);
      return null;
    });
  }
  if (networkError) {
    alert(networkError);
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

  // Redux Login/Logout Reducers
  const loginHandle = () => dispatch(login());
  const logoutHandle = () => dispatch(logout());

  return (
    
    <ApolloProvider client={client}>
      <div className="App">
      </div>
    </ApolloProvider>
  );
}

export default App;
