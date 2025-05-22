type Props = {
  embedId: string;
  className: string;
};
const YoutubePlayer = ({ embedId, className }: Props) => (
  <div>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className={className}
    />
  </div>
);

export default YoutubePlayer;
