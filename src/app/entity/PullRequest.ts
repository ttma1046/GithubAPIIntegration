export interface PullRequest {
  title: string;
  body: string;
  state: string;
  number: number;
  head: {
    sha: string
  };
}
