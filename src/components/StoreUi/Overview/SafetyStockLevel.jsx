import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import {
  LinearProgress,
  Step,
  StepLabel,
  Stepper,
  StepConnector,
  styled,
} from "@mui/material";

const SafetyStockLevel = () => {
  const stockLevels = [
    {
      icon: CheckCircle,
      name: "Runner",
      subtitle: "High Performance",
      percentage: 70,
      color: "#22C55E",
      bgColor: "linear-gradient(90deg, #C3FFE6 100%, #D3FFED 0%)",
      childbgColor: "linear-gradient(90deg, #22C55E 0%,#4ADE80 100%)",
    },
    {
      icon: Clock,
      name: "Repeater",
      subtitle: "Medium Performance",
      percentage: 50,
      color: "#F59E0B",
      bgColor: "linear-gradient(90deg, #FFF4D9 100%, #FFF7E6 0%)",
      childbgColor: "linear-gradient(90deg, #F59E0B 0%, #F7B84B 100%)",
    },
    {
      icon: AlertCircle,
      name: "Stranger",
      subtitle: "Low Performance",
      percentage: 30,
      color: "#EF4444",
      bgColor: "linear-gradient(90deg, #FFE4E4 100%, #FFF1F1 0%)",
      childbgColor: "linear-gradient(90deg, #EF4444 0%, #F87171 100%)",
    },
  ];

  // Custom connector with taller line
  const CustomConnector = styled(StepConnector)(({ theme }) => ({
    marginLeft: 11,
    "& .MuiStepConnector-line": {
      minHeight: "100%",
      borderLeftWidth: 2,
      borderColor: theme.palette.grey[300],
    },
  }));

  const CustomStepIcon = ({ bg }) => (
    <div
      style={{
        background: bg,
        borderRadius: "9999px",
        //   padding: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 25,
        height: 25,
      }}
    ></div>
  );

  return (
    <div className="bg-white rounded-xl  shadow-md border border-gray-200 h-full flex flex-col gap-2 pb-3">
      <h2 className="text-md font-semibold text-gray-900 pl-3 pt-2">
        Safety Stock Level
      </h2>
      <div className="flex flex-1 px-3">
        <Stepper
          sx={{ py: "26px" }}
          orientation="vertical"
          connector={<CustomConnector />}
          nonLinear
        >
          {stockLevels.map((level, index) => (
            <Step key={index} active>
              <StepLabel
                sx={{
                  p: 0,
                  m: 0,
                }}
                StepIconComponent={() =>
                  CustomStepIcon({
                    bg: level.childbgColor,
                  })
                }
              />
            </Step>
          ))}
        </Stepper>
        <div className="bg-g flex-1 flex flex-col justify-between gap-5">
          {stockLevels.map((level, index) => (
            <div
              style={{
                background: level.bgColor,
              }}
              key={index}
              className={`flex-1 px-3 shadow-sm border border-gray-200 rounded-xl `}
            >
              <div className="flex h-full items-center gap-3 ">
                <div
                  style={{
                    background: level.childbgColor,
                  }}
                  className="p-4 rounded-xl"
                >
                  <level.icon className={`w-6 h-6 text-white`} />
                </div>

                <div className="flex-1 py-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">{level.name}</h3>
                    <span
                      style={{
                        color: level.color,
                      }}
                      className="text-lg font-medium "
                    >
                      {level.percentage}%
                    </span>
                  </div>
                  <div className="">
                    <p className="text-xs xl-plus:text-sm text-gray-600">
                      {level.subtitle}
                    </p>
                    <LinearProgress
                      variant="determinate"
                      value={level.percentage}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: "#f3f4f6", // Tailwind gray-100
                        "& .MuiLinearProgress-bar": {
                          background: level.childbgColor,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyStockLevel;
