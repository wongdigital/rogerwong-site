export type PageProps<
  Params = Record<string, never>,
  SearchParams = Record<string, never>
> = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}; 