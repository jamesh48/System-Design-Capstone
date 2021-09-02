import {
  FooterWrapper,
  EmptyRow,
  FooterFirstRow,
  AboutSteam,
  AboutValve,
  Help,
  NewsFeeds,
  LegalText,
  ValveLogo,
  FooterRow,
  PrivacyPolicy,
  PriceInfo,
  Legal,
  SubInfo,
  Refunds,
  SteamLogoFooter,
  LastFooterRow,
  FooterAbout,
  FooterSteamworks,
  FooterJobs,
  FooterDist,
  FooterGiftCards,
  FBcontainer,
  TwitterContainer,
  FB,
  Twitter
} from './footerApp.styles.jsx'

var FooterApp = props => {

  return (
    <FooterWrapper>
      <EmptyRow>
        &nbsp;
      </EmptyRow>
      <FooterFirstRow>
        <AboutSteam>
          ABOUT STEAM
        </AboutSteam>
        <AboutValve>
          ABOUT VALVE
        </AboutValve>
        <Help>
          HELP
        </Help>
        <NewsFeeds>
          NEWS FEEDS
        </NewsFeeds>
      </FooterFirstRow>
      <LegalText>
        © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
      </LegalText>
      <ValveLogo>
      <img src="https://gifbucket.s3-us-west-1.amazonaws.com/footerLogo_valve_new.png" height="25" width="88"/>
      </ValveLogo>
      <FooterRow>
        <PriceInfo>
          VAT included in all prices where applicable.
        </PriceInfo>
        <PrivacyPolicy>
          Privacy Policy
        </PrivacyPolicy>
        <Legal>
          Legal
        </Legal>
        <SubInfo>
          Steam Subscriber Agreement
        </SubInfo>
        <Refunds>
          Refunds
        </Refunds>
      </FooterRow>
      <SteamLogoFooter>
      <img src="https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam_footer.png" />
      </SteamLogoFooter>
      <LastFooterRow>
        <FooterAbout>
          About Valve
        </FooterAbout>
        <FooterSteamworks>
          Steamworks
        </FooterSteamworks>
        <FooterJobs>
          Jobs
        </FooterJobs>
        <FooterDist>
          Steam Distribution
        </FooterDist>
        <FooterGiftCards>
          Gift Cards
        </FooterGiftCards>
        <FBcontainer>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/ico_facebook.gif" />
          <FB>
            Steam
          </FB>
        </FBcontainer>
        <TwitterContainer>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/ico_twitter.gif" />
        <Twitter>
          @steam
        </Twitter>
        </TwitterContainer>
      </LastFooterRow>
    </FooterWrapper>
  )
}

export default FooterApp;