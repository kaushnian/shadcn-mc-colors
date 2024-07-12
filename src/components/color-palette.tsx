import { colorsV1 } from '@/data/colors-v1';
import { colorsV2 } from '@/data/colors-v2';

export default function ColorPalette() {
  const isHue = (option: string) => isNaN(Number(option));

  return (
    <div className="text-center flex gap-4">
      {Object.entries(colorsV1).map(([name, options]) => (
        <div key={name}>
          <div>
            <div className="flex items-stretch justify-evenly text-slate-700 text-sm">
              <div className="w-20">Legacy</div>
              <div className="w-20">Flynn</div>
            </div>
            <div style={{ background: name }} className="text-white text-xs capitalize">
              {name}
            </div>

            {Object.entries(options).map(([option, color]) => (
              <div key={option} className="flex h-20 mb-0.5 gap-0.5">
                <div style={{ background: color }} className="w-24 text-[9px] lowercase">
                  <div>
                    <span className="bg-white/40">{color}</span>
                  </div>
                  <div>
                    <span className="bg-white/40">
                      {isHue(option) ? (
                        <>
                          <div>
                            <span className="bg-white/40">
                              {Object.entries(options).find(([_, value]) => value === color)?.[0]}
                            </span>
                          </div>
                          <span className="bg-white/40 uppercase">{option}</span>
                        </>
                      ) : (
                        option
                      )}
                    </span>
                  </div>
                </div>

                {/* V2 Colors */}
                {(() => {
                  let colorV2 = colorsV2[name][option];
                  let optionsV2 = colorsV2[name];

                  return (
                    <div style={{ background: colorV2 }} className="w-24 text-[9px] lowercase">
                      <div>
                        <span className="bg-white/40">{color}</span>
                      </div>
                      <div>
                        <span className="bg-white/40">
                          {isHue(option) ? (
                            <>
                              <div>
                                <span className="bg-white/40">
                                  {
                                    Object.entries(optionsV2).find(
                                      ([_, value]) => value === colorV2
                                    )?.[0]
                                  }
                                </span>
                              </div>
                              <span className="bg-white/40 uppercase">{option}</span>
                            </>
                          ) : (
                            option
                          )}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
