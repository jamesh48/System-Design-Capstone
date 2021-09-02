import {
  HeaderWrapper,
  Row1,
  Row2,
  Install,
  Login,
  Language,
  Logo,
  Store,
  Community,
  About,
  Support
} from './headerApp.styles.jsx'

var HeaderApp = props => {

  return (
    <HeaderWrapper>
      <Row1>
        <Install>
          <img src="https://gifbucket.s3-us-west-1.amazonaws.com/downloadIco.png" />
          &nbsp;&nbsp;Install Steam
        </Install>
        <Login>
          login
        </Login>
        <div>
        &nbsp;|&nbsp;
        </div>
        <Language>
          language
        </Language>
      </Row1>
      <Row2>
        <Logo>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam.svg" width="160" height="50" />
        </Logo>
        <Store>
          Store
        </Store>
        <Community>
          Community
        </Community>
        <About>
          About
        </About>
        <Support>
          Support
        </Support>
      </Row2>
    </HeaderWrapper>
  )
}

export default HeaderApp;