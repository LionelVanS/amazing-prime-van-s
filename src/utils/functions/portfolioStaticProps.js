export function getPortfolioStaticPaths(portfolioSmallCardsData) {
   const paths = portfolioSmallCardsData.map((data) => ({
      params: { project: data.id.toString() },
   }));

   return { paths, fallback: false };
}

export function getPortfolioStaticProps({ params }) {
   const data = portfolioSmallCardsData[params.project];
   return { props: { data: data || null } };
}
