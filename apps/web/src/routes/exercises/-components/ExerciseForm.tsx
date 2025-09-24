export const ExerciseForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">種目名:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="body_part">ターゲット部位:</label>
        <select id="body_part" name="body_part">
          <option value="">選択してください</option>
          <option value="legs">脚</option>
          <option value="back">背中</option>
          <option value="shoulders">肩</option>
          <option value="arms">腕</option>
          <option value="chest">胸</option>
          <option value="cardio">有酸素</option>
        </select>
      </div>

      <div>
        <label htmlFor="laterality">種目タイプ:</label>
        <select id="laterality" name="laterality">
          <option value="">選択してください</option>
          <option value="bilateral">両手・両足(バイラテラル)</option>
          <option value="unilateral">片手・片足(ラテラル)</option>
        </select>
      </div>

      <div>
        <label htmlFor="memo">メモ:</label>
        <textarea id="memo" name="memo" rows={4} />
      </div>

      <button type="submit" className="button">
        登録
      </button>
    </form>
  );
};
