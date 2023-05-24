import Head from "next/head";

const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Header.defaultProps = {
  title: "Home",
  description:
    "Recroot is a Next Gen Jobs Platform Connecting Organisations with Remote Tech Professionals through Permanent, Contract and Freelancing Recruitment Solutions.",
};

export default Header;
