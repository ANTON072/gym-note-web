interface Props {
  /** 表示するタイトル文字列 */
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <h2 className="text-2xl font-bold">{title}</h2>;
};
