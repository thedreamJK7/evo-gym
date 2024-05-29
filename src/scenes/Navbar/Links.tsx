import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types"
type Props = {
    page: string, 
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowercase = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
      href={`#${lowercase}`}
      onClick={() => setSelectedPage(lowercase)}
      className={`${selectedPage === lowercase ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
    >
      {page}
    </AnchorLink>
  );
}

export default Links