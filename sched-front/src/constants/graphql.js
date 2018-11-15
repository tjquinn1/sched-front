// 2
export const ALL_EMPS_QUERY = gql`
  query emps {
    emps {
      id
      user {
        firstName
        lastName
      }
    }
  }
`

// 1
export const CREATE_EMP_MUTATION = gql`
  # 2
  mutation CreateEmpMutation(
    $user: Int!
    $biz: Int!
    $sundayStart: Int!
    $sundayEnd: Int!
    $mondayStart: Int!
    $mondayEnd: Int!
    $tuesdayStart: Int!
    $tuesdayEnd: Int!
    $wednesdayStart: Int!
    $wednesdayEnd: Int!
    $thursdayStart: Int!
    $thursdayEnd: Int!
    $fridayStart: Int!
    $fridayEnd: Int!
    $saturdayStart: Int!
    $saturdayEnd: Int!
  ) {
    createEmp(
      sundayStart: $sundayStart
      sundayEnd: $sundayEnd
      mondayStart: $mondayStart
      mondayEnd: $mondayEnd
      tuesdayStart: $tuesdayStart
      tuesdayEnd: $tuesdayEnd
      wednesdayStart: $wednesdayStart
      wednesdayEnd: $wednesdayEnd
      thursdayStart: $thursdayStart
      thursdayEnd: $thursdayEnd
      fridayStart: $fridayStart
      fridayEnd: $fridayEnd
      saturdayStart: $saturdayStart
      saturdayEnd: $saturdayEnd
    ) {
      id
      createdAt
      user
      biz
      sundayStart
      sundayEnd
      mondayStart
      mondayEnd
      tuesdayStart
      tuesdayEnd
      wednesdayStart
      wednesdayEnd
      thursdayStart
      thursdayEnd
      fridayStart
      fridayEnd
      saturdayStart
      saturdayEnd
    }
  }
`

export const CREATE_BIZ_MUTATION = gql`
  # 2
  mutation CreateBizMutation($name: String!) {
    createBiz(name: $name) {
      name
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }

    LogInUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`

export const LOGIN_USER_MUTATION = gql`
  mutation LogInMutation($email: String!, $password: String!) {
    LogIn(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`
