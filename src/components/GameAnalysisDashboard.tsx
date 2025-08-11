import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 模拟数据类型定义
interface GameAnalysisData {
  [key: string]: {
    [key: string]: string[];
  } | string[];
}
interface TableData {
  tableName: string;
  gameContentUnderstanding: GameAnalysisData;
  userProfile: GameAnalysisData;
  motivationUnderstanding: GameAnalysisData;
  paymentUnderstanding: GameAnalysisData;
}

// 模拟数据
const mockData: {
  [gameName: string]: TableData[];
} = {
  "模拟经营游戏A": [{
    tableName: "表1",
    gameContentUnderstanding: {
      '玩法机制': {
        '策略型玩法': ['模拟经营'],
        '社交型玩法': ['UGC创造'],
        '轻度玩法': ['点击放置']
      },
      '题材世界观': {
        '其他向': ['生存', '脑洞恶搞']
      },
      '战斗模式': {
        'PVE（对环境）': ['BOSS挑战'],
        '非对抗型': ['建造', '装扮']
      },
      '节奏强度': {
        '中度游戏': ['中度']
      },
      '画风派别': {
        '卡通类': ['Q版']
      },
      '画风感觉': ['清新治愈', '实时渲染 / UE画质']
    },
    userProfile: {
      '年龄段': {
        '青年': ['18-25岁', '26-30岁']
      },
      '性别': {
        '男性': ['占比60%'],
        '女性': ['占比40%']
      },
      '游戏偏好': {
        '策略类': ['经营模拟'],
        '社交类': ['多人合作']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '成就感': ['建造成就', '收集完成'],
        '社交需求': ['与好友互动']
      },
      '游戏时长': {
        '中等': ['30-60分钟']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '中等': ['月消费50-200元']
      },
      '付费项目': {
        '道具': ['加速道具', '装饰物品'],
        '功能': ['扩展背包']
      }
    }
  }, {
    tableName: "表2",
    gameContentUnderstanding: {
      '玩法机制': {
        '策略型玩法': ['模拟经营'],
        '社交型玩法': ['UGC创造', '多人联机'],
        '轻度玩法': ['快节奏反应', '碎片化']
      },
      '题材世界观': {
        '现实/写实向': ['模拟现实'],
        '东方文化向': ['田园家园']
      },
      '战斗模式': {
        'PVE（对环境）': ['BOSS挑战'],
        '非对抗型': ['建造', '种田', '冒险探索']
      },
      '节奏强度': {
        '轻度游戏': ['碎片化', '随玩随停']
      },
      '画风派别': {
        '卡通类': ['Q版']
      },
      '画风感觉': ['清新治愈', '实时渲染 / UE画质']
    },
    userProfile: {
      '年龄段': {
        '中年': ['31-40岁'],
        '青年': ['26-30岁']
      },
      '性别': {
        '女性': ['占比65%'],
        '男性': ['占比35%']
      },
      '游戏偏好': {
        '休闲类': ['种田经营'],
        '社交类': ['家园装饰']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '放松': ['减压娱乐', '休闲时光'],
        '创造': ['家园设计']
      },
      '游戏时长': {
        '短时': ['10-30分钟']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '较低': ['月消费20-100元']
      },
      '付费项目': {
        '装饰': ['家具套装', '皮肤'],
        '功能': ['便利工具']
      }
    }
  }, {
    tableName: "表3",
    gameContentUnderstanding: {
      '玩法机制': {
        '策略型玩法': ['资源管理'],
        '轻度玩法': ['点击收集']
      },
      '题材世界观': {
        '幻想向': ['魔法世界']
      },
      '战斗模式': {
        '非对抗型': ['探索', '收集']
      },
      '节奏强度': {
        '轻度游戏': ['休闲']
      },
      '画风派别': {
        '卡通类': ['可爱风']
      },
      '画风感觉': ['梦幻色彩']
    },
    userProfile: {
      '年龄段': {
        '青年': ['18-25岁']
      },
      '性别': {
        '女性': ['占比70%'],
        '男性': ['占比30%']
      },
      '游戏偏好': {
        '收集类': ['宠物养成'],
        '装扮类': ['角色定制']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '收集': ['完整性强迫症'],
        '装扮': ['个性展示']
      },
      '游戏时长': {
        '灵活': ['随时随地']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '较高': ['月消费100-500元']
      },
      '付费项目': {
        '外观': ['限定服装', '特效'],
        '宠物': ['稀有宠物']
      }
    }
  }, {
    tableName: "表4",
    gameContentUnderstanding: {
      '玩法机制': {
        '策略型玩法': ['策略布局'],
        '竞技型玩法': ['排行榜']
      },
      '题材世界观': {
        '科幻向': ['未来都市']
      },
      '战斗模式': {
        'PVP（对人）': ['竞技对战']
      },
      '节奏强度': {
        '重度游戏': ['高强度']
      },
      '画风派别': {
        '写实类': ['科技感']
      },
      '画风感觉': ['炫酷特效', '金属质感']
    },
    userProfile: {
      '年龄段': {
        '青年': ['22-28岁']
      },
      '性别': {
        '男性': ['占比80%'],
        '女性': ['占比20%']
      },
      '游戏偏好': {
        '竞技类': ['策略对战'],
        '成长类': ['角色培养']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '竞争': ['排名提升'],
        '成就': ['实力证明']
      },
      '游戏时长': {
        '长时': ['1-3小时']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '高': ['月消费200-1000元']
      },
      '付费项目': {
        '战力': ['装备强化', '角色卡'],
        '特权': ['VIP功能']
      }
    }
  }],
  "RPG冒险游戏B": [{
    tableName: "表1",
    gameContentUnderstanding: {
      '玩法机制': {
        '角色扮演': ['技能成长'],
        '冒险探索': ['地图解锁']
      },
      '题材世界观': {
        '奇幻向': ['魔法大陆']
      },
      '战斗模式': {
        'PVE（对环境）': ['怪物战斗']
      },
      '节奏强度': {
        '中度游戏': ['适中节奏']
      },
      '画风派别': {
        '日系': ['动漫风格']
      },
      '画风感觉': ['绚丽色彩']
    },
    userProfile: {
      '年龄段': {
        '青年': ['18-28岁']
      },
      '性别': {
        '男性': ['占比55%'],
        '女性': ['占比45%']
      },
      '游戏偏好': {
        'RPG类': ['角色养成'],
        '故事类': ['剧情体验']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '成长': ['角色变强'],
        '探索': ['世界发现']
      },
      '游戏时长': {
        '中长': ['45-90分钟']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '中等': ['月消费80-300元']
      },
      '付费项目': {
        '角色': ['新角色'],
        '装备': ['稀有武器']
      }
    }
  }, {
    tableName: "表2",
    gameContentUnderstanding: {
      '玩法机制': {
        '团队合作': ['组队副本'],
        '社交系统': ['公会系统']
      },
      '题材世界观': {
        '武侠向': ['江湖世界']
      },
      '战斗模式': {
        'PVE（对环境）': ['团队副本'],
        'PVP（对人）': ['切磋比武']
      },
      '节奏强度': {
        '重度游戏': ['深度体验']
      },
      '画风派别': {
        '国风': ['水墨画风']
      },
      '画风感觉': ['古典韵味']
    },
    userProfile: {
      '年龄段': {
        '中年': ['28-35岁']
      },
      '性别': {
        '男性': ['占比70%'],
        '女性': ['占比30%']
      },
      '游戏偏好': {
        '武侠类': ['江湖情怀'],
        '社交类': ['结交好友']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '情怀': ['武侠梦想'],
        '社交': ['兄弟情义']
      },
      '游戏时长': {
        '长时': ['2-4小时']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '较高': ['月消费150-600元']
      },
      '付费项目': {
        '武器': ['神兵利器'],
        '服装': ['江湖服饰']
      }
    }
  }, {
    tableName: "表3",
    gameContentUnderstanding: {
      '玩法机制': {
        '卡牌收集': ['抽卡系统'],
        '策略搭配': ['阵容配置']
      },
      '题材世界观': {
        '二次元': ['动漫IP']
      },
      '战斗模式': {
        'PVE（对环境）': ['关卡挑战']
      },
      '节奏强度': {
        '轻度游戏': ['碎片时间']
      },
      '画风派别': {
        '二次元': ['动漫画风']
      },
      '画风感觉': ['萌系可爱']
    },
    userProfile: {
      '年龄段': {
        '青年': ['16-25岁']
      },
      '性别': {
        '男性': ['占比60%'],
        '女性': ['占比40%']
      },
      '游戏偏好': {
        '收集类': ['卡牌收集'],
        '策略类': ['阵容搭配']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '收集': ['角色收集'],
        '策略': ['配队乐趣']
      },
      '游戏时长': {
        '短中': ['20-45分钟']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '高': ['月消费100-800元']
      },
      '付费项目': {
        '抽卡': ['角色抽取'],
        '资源': ['升级材料']
      }
    }
  }, {
    tableName: "表4",
    gameContentUnderstanding: {
      '玩法机制': {
        '开放世界': ['自由探索'],
        '生存建造': ['基地建设']
      },
      '题材世界观': {
        '末世向': ['废土世界']
      },
      '战斗模式': {
        'PVE（对环境）': ['生存挑战'],
        'PVP（对人）': ['资源争夺']
      },
      '节奏强度': {
        '重度游戏': ['硬核体验']
      },
      '画风派别': {
        '写实类': ['末世风格']
      },
      '画风感觉': ['暗黑氛围']
    },
    userProfile: {
      '年龄段': {
        '青年': ['20-30岁']
      },
      '性别': {
        '男性': ['占比85%'],
        '女性': ['占比15%']
      },
      '游戏偏好': {
        '生存类': ['末世求生'],
        '建造类': ['基地建设']
      }
    },
    motivationUnderstanding: {
      '主要动机': {
        '挑战': ['生存挑战'],
        '创造': ['基地设计']
      },
      '游戏时长': {
        '超长': ['3-6小时']
      }
    },
    paymentUnderstanding: {
      '付费意愿': {
        '中等': ['月消费60-250元']
      },
      '付费项目': {
        '工具': ['高级工具'],
        '材料': ['稀有材料']
      }
    }
  }]
};

// 标签颜色映射
const tagColors = ['bg-tag-table1 text-white', 'bg-tag-table2 text-white', 'bg-tag-table3 text-white', 'bg-tag-table4 text-white', 'bg-tag-purple text-white', 'bg-tag-orange text-white', 'bg-tag-teal text-white', 'bg-tag-indigo text-white'];

// 为每个标签分配颜色
const getTagColor = (tag: string, tableIndex: number): string => {
  const hash = tag.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const colorIndex = (hash + tableIndex) % tagColors.length;
  return tagColors[colorIndex];
};

// 获取所有表格中某个维度的所有可能的key
const getAllKeysInDimension = (allTableData: TableData[], dimension: keyof Omit<TableData, 'tableName'>): string[] => {
  const allKeys = new Set<string>();
  allTableData.forEach(tableData => {
    const data = tableData[dimension] as GameAnalysisData;
    Object.keys(data).forEach(key => allKeys.add(key));
  });
  return Array.from(allKeys).sort();
};

// 获取某个主分类下的所有子分类
const getAllSubKeysInCategory = (allTableData: TableData[], dimension: keyof Omit<TableData, 'tableName'>, category: string): string[] => {
  const allSubKeys = new Set<string>();
  allTableData.forEach(tableData => {
    const data = tableData[dimension] as GameAnalysisData;
    const categoryData = data[category];
    if (categoryData && !Array.isArray(categoryData)) {
      Object.keys(categoryData).forEach(subKey => allSubKeys.add(subKey));
    }
  });
  return Array.from(allSubKeys).sort();
};
interface AlignedTagDisplayProps {
  data: GameAnalysisData;
  tableIndex: number;
  allTableData: TableData[];
  dimension: keyof Omit<TableData, 'tableName'>;
}
const AlignedTagDisplay: React.FC<AlignedTagDisplayProps> = ({
  data,
  tableIndex,
  allTableData,
  dimension
}) => {
  // 获取该维度下所有可能的主分类key
  const allMainKeys = getAllKeysInDimension(allTableData, dimension);
  const renderAlignedStructure = () => {
    const sections: JSX.Element[] = [];
    allMainKeys.forEach(mainKey => {
      const categoryData = data[mainKey];
      if (!categoryData) {
        // 如果当前表没有这个主分类，显示空白占位
        sections.push(<div key={mainKey} className="mb-3">
            <div className="text-sm font-medium text-muted-foreground mb-1">{mainKey}</div>
            <div className="min-h-[32px] text-xs text-muted-foreground italic">
              暂无数据
            </div>
          </div>);
        return;
      }
      if (Array.isArray(categoryData)) {
        // 直接是标签数组
        sections.push(<div key={mainKey} className="mb-3">
            <div className="text-sm font-medium text-foreground mb-1">{mainKey}</div>
            <div className="flex flex-wrap">
              {categoryData.map((tag, index) => <Badge key={`${mainKey}-${index}`} className={`${getTagColor(tag, tableIndex)} mr-1 mb-1 text-xs`}>
                  {tag}
                </Badge>)}
            </div>
          </div>);
      } else {
        // 有子分类的情况
        const allSubKeys = getAllSubKeysInCategory(allTableData, dimension, mainKey);
        sections.push(<div key={mainKey} className="mb-3">
            <div className="text-sm font-medium text-foreground mb-1">{mainKey}</div>
            {allSubKeys.map(subKey => {
            const subCategoryData = categoryData[subKey];
            if (!subCategoryData) {
              // 子分类不存在，显示占位
              return <div key={subKey} className="mb-2">
                    <div className="text-xs text-muted-foreground mb-1 ml-2">{subKey}</div>
                    <div className="min-h-[24px] ml-2 text-xs text-muted-foreground italic">
                      暂无数据
                    </div>
                  </div>;
            }
            return <div key={subKey} className="mb-2">
                  <div className="text-xs text-muted-foreground mb-1 ml-2">{subKey}</div>
                  <div className="flex flex-wrap ml-2">
                    {subCategoryData.map((tag, index) => <Badge key={`${mainKey}-${subKey}-${index}`} className={`${getTagColor(tag, tableIndex)} mr-1 mb-1 text-xs`}>
                        {tag}
                      </Badge>)}
                  </div>
                </div>;
          })}
          </div>);
      }
    });
    return sections;
  };
  return <div>{renderAlignedStructure()}</div>;
};
interface DimensionSectionProps {
  title: string;
  data: TableData[];
  dimension: keyof Omit<TableData, 'tableName'>;
}
const DimensionSection: React.FC<DimensionSectionProps> = ({
  title,
  data,
  dimension
}) => {
  return <div className="mb-8 bg-dashboard-section rounded-lg p-6">
      <h3 className="text-xl font-semibold text-dashboard-dimension mb-4 border-b pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((tableData, index) => <Card key={index} className="h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-center">
                {tableData.tableName}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <AlignedTagDisplay data={tableData[dimension] as GameAnalysisData} tableIndex={index} allTableData={data} dimension={dimension} />
            </CardContent>
          </Card>)}
      </div>
    </div>;
};
export const GameAnalysisDashboard = () => {
  const [selectedGame, setSelectedGame] = useState<string>("");
  const games = Object.keys(mockData);
  const handleGameSelect = (gameName: string) => {
    setSelectedGame(gameName);
  };
  const selectedData = selectedGame ? mockData[selectedGame] : [];
  return <div className="min-h-screen p-6 bg-blue-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center bg-blue-300">
          <h1 className="text-3xl font-bold text-dashboard-header mb-4">
            游戏数据分析对比平台
          </h1>
          <div className="max-w-md mx-auto">
            <Select onValueChange={handleGameSelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择游戏" />
              </SelectTrigger>
              <SelectContent>
                {games.map(game => <SelectItem key={game} value={game}>
                    {game}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dashboard Content */}
        {selectedGame && selectedData.length > 0 && <div className="space-y-6">
            <DimensionSection title="游戏内容理解" data={selectedData} dimension="gameContentUnderstanding" />
            
            <DimensionSection title="用户画像" data={selectedData} dimension="userProfile" />
            
            <DimensionSection title="动机理解" data={selectedData} dimension="motivationUnderstanding" />
            
            <DimensionSection title="付费理解" data={selectedData} dimension="paymentUnderstanding" />
          </div>}

        {/* Empty State */}
        {!selectedGame && <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-xl font-semibold text-muted-foreground mb-2">
              请选择一款游戏开始分析
            </h2>
            <p className="text-muted-foreground">
              通过上方下拉菜单选择游戏，查看详细的数据分析结果
            </p>
          </div>}
      </div>
    </div>;
};