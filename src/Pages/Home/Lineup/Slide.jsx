export const Slide = ({ item, slideName, toggleSlides }) => {

  return (
    <div className={slideName}>
      {/* X close */}
      {window.innerWidth < 999 && (
        <img
          onClick={() => {
            toggleSlides(`slider_${slideName}`);
          }}
          className="close"
          src="/assets/iconos/equis/x.png"
          alt="equis"
        />
      )}

      {/* Name */}
      <h2>{item.artista.Nombre}</h2>
      {/* Description */}
      <p className="descripcion">{item.artista.descripcion}</p>

      {/* Social media */}
      <div className="social">
        {item.artista.instagram_url && (
          <a
            href={item.artista.instagram_url}
            className="ga4-call_to_action-artista-rrss"
            target="_blank"
          >
            <img src="/assets/social/instagram.png" alt="social" />
          </a>
        )}

        {item.artista.spotify_url && (
          <a
            href={item.artista.spotify_url}
            className="ga4-call_to_action-artista-rrss"
            target="_blank"
          >
            <img src="/assets/social/spotify.png" alt="social" />
          </a>
        )}
        {item.artista.soundcloud_url && (
          <a
            href={item.artista.soundcloud_url}
            className="ga4-call_to_action-artista-rrss"
            target="_blank"
          >
            <img src="/assets/social/soundcloud.png" alt="social" />
          </a>
        )}
      </div>

      {/* Artists image */}
      <div className="imagen">
        <img src={item.artista.imagen.url} alt="artista" />
      </div>
    </div>
  );
};
