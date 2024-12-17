export type PageProps<
  Params = Record<string, never>,
  SearchParams = Record<string, never>
> = {
  params: Params;
  searchParams: SearchParams;
}; 