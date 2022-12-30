import CircularProgress from "@mui/material/CircularProgress";
export default function Loading() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <CircularProgress color="success" />
    </div>
  );
}
