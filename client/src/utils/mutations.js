const gql = reuqire('gql');
import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email:String!, $password:String!){
    login(email:$email, password:$password) {
        token
        user{
            _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username:String!,$password:String!,$email:String!) {
    addUser(username:$username, password:$password, email,$email) {
        user{
            _id
            username:
            email: 
            bookCount: 
            savedBooks: {
                bookId
                authors
                description
                title
                image
                link
            }
        }
        token

    }

}
`;

export const SAVE_BOOK = gql`
mutation savedBook($input:savedBook!){
    savedBook (input:$input) 
        {
            _id
            username
            email
            bookCount
            savedBooks: {
                _id
                description: 
                title 
                bookId
                image
                link
                authors 
            }
        }  
}
`;

export const ROMVE_BOOK = gql`
    mutation removeBook($bookId:ID!) {
        removeBook(bookID:$bookId) {
            _id
            username
            email
            bookCount
            savedBooks: {
                _id
                description: 
                title 
                bookId
                image
                link
                authors 
            } 
        }
    }
`;