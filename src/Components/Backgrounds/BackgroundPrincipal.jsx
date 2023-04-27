export const BackgroundPrincipal = () => {
  return (
    <div className="background_principal">
      <video
        muted
        playsInline
        autoPlay
        loop
        poster={`/assets/fondo/mancha_fondo_oscuro.mp4`}
      >
        <source
          src={`/assets/fondo/mancha_fondo_oscuro.mp4`}
          type="video/mp4"
        />
      </video>

    </div>
  );
};
