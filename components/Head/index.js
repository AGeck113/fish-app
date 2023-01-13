import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function Head() {
  const [activeCurrency, setActiveCurrency] = useLocalStorageState(
    "activeCurrency",
    { defaultValue: "EUR" }
  );
  const router = useRouter();
  const { id } = router.query;
  function handleActiveCurrency(event) {
    setActiveCurrency(event.target.value);
    console.log(router);
    // router.push(`/${router.query}`);
  }
  return (
    <form>
      <select
        onChange={(event) => {
          handleActiveCurrency(event);
        }}
      >
        <option value={activeCurrency}>{activeCurrency}</option>
        {activeCurrency === "EUR" ? (
          <option value="USD">USD</option>
        ) : (
          <option value="EUR">EUR</option>
        )}
      </select>
    </form>
  );
}
