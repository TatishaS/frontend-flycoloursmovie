import ContentLoader from "react-content-loader";

const FilmFullSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1800}
    height={500}
    viewBox="0 0 1800 500"
    backgroundColor="#f4f3f4"
    foregroundColor="#bfbfbf"
  >
    <rect x="291" y="19" rx="0" ry="0" width="257" height="28" />
    <rect x="293" y="62" rx="0" ry="0" width="65" height="30" />
    <rect x="292" y="109" rx="0" ry="0" width="265" height="73" />
    <rect x="23" y="20" rx="0" ry="0" width="220" height="284" />
    <rect x="37" y="66" rx="0" ry="0" width="75" height="33" />
    <rect x="292" y="237" rx="11" ry="11" width="132" height="51" />
  </ContentLoader>
);

export default FilmFullSkeleton;
