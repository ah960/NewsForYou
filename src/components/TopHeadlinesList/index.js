import TopHeadlineItem from "../TopHeadlineItem";

function TopHeadlinesList({ articles }) {
  return (
    <div>
      {articles.map(function (article, index) {
        return <TopHeadlineItem {...article} key={index} />;
      })}
    </div>
  );
}

export default TopHeadlinesList;
