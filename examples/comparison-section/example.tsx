/**
 * Comparison Section Template
 * 製品・サービスと競合或いは従来の方法を比較するテーブルセクション
 *
 * 参考実装:
 * - app/launch/page.tsx (行238-279)
 *
 * カスタマイズポイント:
 * - comparisonData 配列の行・列を変更
 * - テーブルヘッダーの色（bg-orange-50 → 別の色に変更）
 * - 列数を増やす場合は grid-cols-* を調整
 */

interface ComparisonRow {
  item: string;
  yours: string;
  other: string;
}

const comparisonData: ComparisonRow[] = [
  { item: "項目1", yours: "優れている点", other: "劣っている点" },
  { item: "項目2", yours: "優れている点", other: "劣っている点" },
  { item: "項目3", yours: "優れている点", other: "劣っている点" },
  { item: "項目4", yours: "優れている点", other: "劣っている点" },
  { item: "項目5", yours: "優れている点", other: "劣っている点" },
];

/**
 * 比較テーブルセクション
 * - 2列比較（自社 vs 他社/従来）
 * - ハイライト付きヘッダー
 */
export function ComparisonSection() {
  return (
    <section className="bg-column py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            従来の方法との比較
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg bg-background shadow-card">
            <thead>
              <tr className="border-b border-base2">
                <th className="px-6 py-4 text-left text-base font-bold text-foreground">
                  比較項目
                </th>
                {/* 色をカスタマイズ: primary-50 / primary などに変更 */}
                <th className="bg-primary-50 px-6 py-4 text-left text-base font-bold text-primary">
                  当社サービス
                </th>
                <th className="px-6 py-4 text-left text-base font-bold text-sub-text">
                  従来の方法
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.item} className="border-b border-base1 last:border-b-0">
                  <td className="px-6 py-4 text-base text-foreground">
                    {row.item}
                  </td>
                  {/* 行のハイライト色も上記と合わせる */}
                  <td className="bg-primary-50 px-6 py-4 text-base font-bold text-primary">
                    {row.yours}
                  </td>
                  <td className="px-6 py-4 text-base text-sub-text">
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
