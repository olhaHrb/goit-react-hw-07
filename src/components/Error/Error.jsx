import { useSelector } from "react-redux";

export default function Error() {
  const errorMessage = useSelector((state) => state.contacts.error);
  return (
    <div>
      <p>Error: {errorMessage}</p>
    </div>
  );
}
