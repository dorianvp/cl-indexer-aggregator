import { defineHandler } from "nitro";
import indexerList from "../../indexer_list.json";

export default defineHandler((event) => {
	return { data: indexerList };
});
