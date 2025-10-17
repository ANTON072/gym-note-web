interface Props {
  /** 表示するタイトル文字列 */
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return (
    <h2 className="scroll-m-header text-2xl font-extrabold tracking-tight text-balance">{title}</h2>
  );
};
