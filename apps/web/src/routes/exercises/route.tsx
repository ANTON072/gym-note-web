import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2 className="page_title">種目一覧</h2>
      <Link to="/exercises/new">新規登録</Link>
      <form>
        <label htmlFor="body_part">部位で絞り込み:</label>
        <select name="body_part" id="body_part">
          <option value="legs">脚</option>
          <option value="back">背中</option>
          <option value="shoulders">肩</option>
          <option value="arms">腕</option>
          <option value="chest">胸</option>
          <option value="cardio">有酸素</option>
        </select>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th
              style={{
                width: "75%",
              }}
            >
              種目名
            </th>
            <th>部位</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/exercises/1">ベンチプレス</Link>
            </td>
            <td>胸</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/2">スクワット</Link>
            </td>
            <td>脚</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/3">デッドリフト</Link>
            </td>
            <td>背中</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/4">懸垂</Link>
            </td>
            <td>背中</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/5">腕立て伏せ</Link>
            </td>
            <td>胸</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/6">ショルダープレス</Link>
            </td>
            <td>肩</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/7">レッグプレス</Link>
            </td>
            <td>脚</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/8">レッグエクステンション</Link>
            </td>
            <td>脚</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/9">レッグカール</Link>
            </td>
            <td>脚</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/10">ラットプルダウン</Link>
            </td>
            <td>背中</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/11">ローイング</Link>
            </td>
            <td>背中</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/12">バイセップカール</Link>
            </td>
            <td>上腕</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/13">トライセップエクステンション</Link>
            </td>
            <td>上腕</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/14">サイドレイズ</Link>
            </td>
            <td>肩</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/15">クランチ</Link>
            </td>
            <td>腹</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/16">プランク</Link>
            </td>
            <td>腹</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/17">ケーブルフライ</Link>
            </td>
            <td>胸</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/18">インクラインベンチプレス</Link>
            </td>
            <td>胸</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/19">ディップス</Link>
            </td>
            <td>胸</td>
          </tr>
          <tr>
            <td>
              <Link to="/exercises/20">ハックスクワット</Link>
            </td>
            <td>脚</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
