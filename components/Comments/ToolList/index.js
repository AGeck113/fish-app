import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledHeading, StyledList } from "./ToolList.styled";
import { StyledButton } from "../../Button/Button.styled";

export default function ToolList() {
  const router = useRouter();
  const { data } = useSWR("/api/tools");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledHeading>Available Tools</StyledHeading>
      <StyledList>
        {data.map((tool) => (
          <li key={tool._id}>
            <StyledButton
              type="button"
              onClick={() => router.push(`/${tool._id}`)}
            >
              {tool.name}
            </StyledButton>
          </li>
        ))}
      </StyledList>
    </>
  );
}
