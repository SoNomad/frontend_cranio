import { getNews } from '@/api/news/getNews';
import { StartPage } from '@/components/StartPage';
import { NewsContext } from '@/shared/contexts/newsContext';
import { loadLocales } from '@/shared/lib/loadLocales';

interface Props {
  id: number;
  description: string;
  picture: string;
}

interface propsNews {
  news: Props[];
}

export default function Home({ news }: propsNews) {
  return (
    <>
      <NewsContext.Provider value={news}>
        <StartPage />
      </NewsContext.Provider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const locale = await loadLocales(['main', 'search'], ctx.locale);
  const news = await getNews();

  return {
    props: {
      locale,
      news,
    },
  };
}
