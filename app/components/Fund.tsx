import { FundCard } from '@coinbase/onchainkit/fund';

export default function FundCardComponents() {
  const presetAmountInputs = ['5', '10', '20'] as const;

  return (
    <div className="p-4 [&_*]:text-left [&_div]:text-left [&_p]:text-left">
      <FundCard 
        assetSymbol="ETH" 
        country="US"
        presetAmountInputs={presetAmountInputs}
      />
    </div>
  );
}
