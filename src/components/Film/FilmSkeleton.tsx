import ContentLoader from "react-content-loader";

const FilmSkeleton = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={360}
    viewBox="0 0 290 360"
    backgroundColor="#f4f3f4"
    foregroundColor="#bfbfbf"
  >
    <rect x="3" y="8" rx="12" ry="12" width="258" height="197" />
    <rect x="0" y="232" rx="0" ry="0" width="257" height="28" />
    <rect x="0" y="265" rx="0" ry="0" width="65" height="30" />
    <rect x="-2" y="305" rx="0" ry="0" width="265" height="22" />
    <rect x="148" y="321" rx="0" ry="0" width="9" height="16" />
    <rect x="-5" y="334" rx="0" ry="0" width="265" height="22" />
  </ContentLoader>
);

export default FilmSkeleton;
