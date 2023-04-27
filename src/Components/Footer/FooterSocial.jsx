export const FooterSocial = () => {
  return (
    <div className="footer_social">
      <div className="red">
        <a
          className="ga4-call_to_action-rrss"
          href="https://www.instagram.com/baumfestival/?hl=en"
          target="_blank"
        >
          <img
            className="social_icon"
            src="/assets/social/instagram.png"
            alt="icono"
          />
          <img
            className="social_icon_hover"
            src="/assets/social/instagram_hover.png"
            alt="icono"
          />
        </a>
      </div>
      <div className="red">
        <a
          className="ga4-call_to_action-rrss"
          href="https://open.spotify.com/playlist/5s9vMKWZpf8MkcduyrlA2L"
          target="_blank"
        >
          <img
            className="social_icon"
            src="/assets/social/spotify.png"
            alt="icono"
          />
          <img
            className="social_icon_hover"
            src="/assets/social/spotify_hover.png"
            alt="icono"
          />
        </a>
      </div>

      <div className="red">
        <a
          className="ga4-call_to_action-rrss"
          href="https://www.facebook.com/BAUMFESTIVAL/"
          target="_blank"
        >
          <img
            className="social_icon"
            src="/assets/social/facebook.png"
            alt="icono"
          />
          <img
            className="social_icon_hover"
            src="/assets/social/facebook_hover.png"
            alt="icono"
          />
        </a>
      </div>
    </div>
  );
};
