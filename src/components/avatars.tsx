import { colorsV2 } from '@/data/colors-v2';

const orphan: { [key: string]: string } = {
  '0097a7': '#0097A7',
  '0288d1': '#0288D1',
  '1565c0': '#1565C0',
  '1e88e5': '#1E88E5',
  '2a6974': '#2A6974',
  '66a34d': '#66A34D',
  a4af36: '#A4AF36',
  aa3322: '#AA3322',
  e32f92: '#E32F92',
  f4f7fa: '#F4F7FA',
  fadedTeal: '#A6C2CB',
  ff5722: '#FF5722',
} as const;

const match: { [key: string]: [string, string] } = {
  '0097a7': [colorsV2.teal[400], 'teal-400'],
  '0288d1': [colorsV2.blue[400], 'blue-400'],
  '1565c0': [colorsV2.blue[500], 'blue-500'],
  '1e88e5': [colorsV2.blue[300], 'blue-300'],
  '2a6974': [colorsV2.teal[600], 'teal-600'],
  '66a34d': [colorsV2.green[400], 'green-400'],
  a4af36: [colorsV2.green[300], 'green-300'],
  aa3322: [colorsV2.red[600], 'red-600'],
  e32f92: [colorsV2.magenta[400], 'magenta-400'],
  f4f7fa: [colorsV2.grey[50], 'grey-50'],
  fadedTeal: [colorsV2.teal[200], 'teal-200'],
  ff5722: [colorsV2.red[300], 'red-300'],
} as const;

export default function Avatars() {
  return (
    <>
      {Object.entries(orphan).map(([key, color]) => (
        <div key={key} className="flex h-20 mb-0.5 gap-0.5">
          <div style={{ background: color }} className="flex-1 text-[10px] lowercase">
            <div>
              <span className="bg-white/40 shadow px-1">orphan-{key}</span>
            </div>
          </div>

          <div style={{ background: match[key][0] }} className="flex-1 text-[10px] lowercase">
            <div>
              <span className="bg-white/40 shadow px-1">{match[key][1]}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
