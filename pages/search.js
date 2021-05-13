import Head from "next/head"
import styles from '../styles/Home.module.css' ;
import SearchHeader from "../components/SearchHeader"
import SearchHeaderOptions from "../components/SearchHeaderOptions";
import { GOOGLE_API_KEY, GOOGLE_CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";


function Search({ results }) {

    console.log(results)
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google2.0 Search</title>
                <link rel="icon" href="" />
            </Head>

            {/*  Header  */}
            <SearchHeader />

            {/* Search Results */}
            <SearchResults results={results} />

            

            
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummy = true;

    const startPagination = context.query.start

    const data = useDummy ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startPagination}`)
    .then((response) => response.json());

    return {
        props: {
            results: data,
        }
    }
}

