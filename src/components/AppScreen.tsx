import { cn } from "@/lib/utils";
import type { ScreenVariant } from "@/config/site";
import { Icon } from "@/components/icons";
import styles from "./phone.module.css";

const WEEK = [
  { label: "M", date: 2 },
  { label: "T", date: 3 },
  { label: "W", date: 4 },
  { label: "T", date: 5 },
  { label: "F", date: 6 },
  { label: "S", date: 7 },
  { label: "S", date: 8 },
];

const TABS = [
  { key: "dashboard", label: "Home", icon: "dashboard" },
  { key: "planner", label: "Plan", icon: "planner" },
  { key: "timer", label: "Focus", icon: "timer", center: true },
  { key: "notebook", label: "Notes", icon: "notebook" },
  { key: "stats", label: "Stats", icon: "stats" },
] as const;

function StatusBar() {
  return (
    <div className={styles.statusbar} aria-hidden="true">
      <span>9:41</span>
      <div className={styles.statusIcons}>
        <span className={styles.signal}>
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className={styles.wifiMark} />
        <span className={styles.battery} />
      </div>
    </div>
  );
}

function TabBar({ active }: { active: string | null }) {
  return (
    <div className={styles.tabbar}>
      {TABS.map((tab) => {
        const isActive = active === tab.key;
        if ("center" in tab && tab.center) {
          return (
            <div key={tab.key} className={styles.tab}>
              <span className={styles.tabCenter}>
                <Icon name="timer" size={14} strokeWidth={1.9} />
              </span>
            </div>
          );
        }
        return (
          <div
            key={tab.key}
            className={cn(styles.tab, isActive && styles.tabActive)}
          >
            <Icon name={tab.icon} size={13} strokeWidth={1.8} />
            <span>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function DashboardScreen() {
  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>Tuesday, Nov 4</p>
          <h3 className={styles.screenTitle}>
            Good morning,
            <br />
            <span>Atna</span>
          </h3>
        </div>
        <span className={styles.avatar}>A</span>
      </div>

      <div className={styles.focusCard}>
        <div className={styles.focusCopy}>
          <span className={styles.cardLabel}>Focus today</span>
          <p className={styles.focusTime}>
            1h 40<small>m</small>
          </p>
          <p className={styles.focusGoal}>Goal 2h 30m · 68%</p>
        </div>
        <div className={styles.ring}>
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle className={styles.ringTrack} cx="24" cy="24" r="19" />
            <circle
              className={styles.ringFill}
              cx="24"
              cy="24"
              r="19"
              strokeDasharray="119.4"
              strokeDashoffset="38.2"
            />
          </svg>
          <span className={styles.ringLabel}>68%</span>
        </div>
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <span className={cn(styles.statIcon, styles.statGreen)}>
            <Icon name="check-circle" size={11} strokeWidth={2} />
          </span>
          <div>
            <strong>6 / 9</strong>
            <small>tasks done</small>
          </div>
        </div>
        <div className={styles.statCard}>
          <span className={cn(styles.statIcon, styles.statAmber)}>
            <Icon name="flame" size={11} strokeWidth={2} />
          </span>
          <div>
            <strong>12 days</strong>
            <small>current streak</small>
          </div>
        </div>
      </div>

      <div className={styles.progressRow}>
        <div className={styles.progressBar}>
          <i style={{ width: "67%" }} />
        </div>
        <small>Today 67%</small>
      </div>

      <div className={styles.sectionRow}>
        <h4>Up next</h4>
        <span>See all</span>
      </div>

      <div className={styles.taskCard}>
        <span className={styles.taskCheck} />
        <div className={styles.taskCopy}>
          <p>Design review</p>
          <small>Work · 25 min</small>
        </div>
        <span className={cn(styles.priority, styles.priorityHigh)}>High</span>
      </div>

      <div className={styles.taskCard}>
        <span className={cn(styles.taskCheck, styles.taskCheckDone)}>
          <Icon name="check" size={8} strokeWidth={3} />
        </span>
        <div className={styles.taskCopy}>
          <p>Morning pages</p>
          <small>Personal · 15 min</small>
        </div>
        <span className={cn(styles.priority, styles.priorityLow)}>Done</span>
      </div>

      <div className={cn(styles.card, styles.weekCard)}>
        <div className={styles.weekTop}>
          <span>This week</span>
          <span>5h 10m focus</span>
        </div>
        <div className={styles.weekBars}>
          {[38, 56, 44, 82, 62, 30, 20].map((height, index) => (
            <span
              key={index}
              className={cn(
                styles.weekBar,
                index === 3 && styles.weekBarActive,
              )}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function PlannerScreen() {
  const tasks = [
    { title: "Design review", meta: "Work · High priority", minutes: "25m", dot: "#F59E0B" },
    { title: "Write release notes", meta: "Work · Medium", minutes: "40m", dot: "#B6BAFF" },
    { title: "Read 20 pages", meta: "Personal · Low", minutes: "15m", dot: "#34D399" },
    { title: "Evening walk", meta: "Health · Low", minutes: "30m", dot: "#0E7490" },
    { title: "Inbox to zero", meta: "Work · Medium", minutes: "15m", dot: "#B6BAFF" },
    { title: "Plan tomorrow", meta: "Personal · Low", minutes: "10m", dot: "#34D399" },
  ];

  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>Wednesday</p>
          <h3 className={styles.screenTitle}>Planner</h3>
        </div>
        <span className={styles.roundButton}>
          <Icon name="plus" size={11} strokeWidth={2.2} />
        </span>
      </div>

      <div className={styles.weekStrip}>
        {WEEK.map((day) => (
          <div
            key={`${day.label}-${day.date}`}
            className={cn(styles.day, day.date === 4 && styles.dayActive)}
          >
            {day.label}
            <b>{day.date}</b>
          </div>
        ))}
      </div>

      <div className={styles.chips}>
        <span className={cn(styles.chip, styles.chipActive)}>All · 9</span>
        <span className={styles.chip}>Work</span>
        <span className={styles.chip}>Personal</span>
        <span className={styles.chip}>Health</span>
      </div>

      <div className={styles.groupLabel}>
        <span>Today</span>
        <b>3 of 9 done</b>
      </div>

      {tasks.map((task) => (
        <div key={task.title} className={styles.planTask}>
          <span className={styles.planDot} style={{ background: task.dot }} />
          <div className={styles.planCopy}>
            <p>{task.title}</p>
            <small>{task.meta}</small>
          </div>
          <span className={styles.minutes}>{task.minutes}</span>
        </div>
      ))}
    </>
  );
}

function FocusScreen() {
  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>Session 2 of 4</p>
          <h3 className={styles.screenTitle}>Focus</h3>
        </div>
        <span className={styles.roundButton}>
          <Icon name="theme" size={11} strokeWidth={1.9} />
        </span>
      </div>

      <div className={styles.modeTabs}>
        <span className={styles.modeTabActive}>Focus</span>
        <span className={styles.modeTab}>Short</span>
        <span className={styles.modeTab}>Long</span>
      </div>

      <div className={styles.timerWrap}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle className={styles.timerTrack} cx="50" cy="50" r="43" />
          <circle
            className={styles.timerFill}
            cx="50"
            cy="50"
            r="43"
            strokeDasharray="270"
            strokeDashoffset="74"
          />
        </svg>
        <div className={styles.timerInner}>
          <small>Deep work</small>
          <span className={styles.timerTime}>25:00</span>
          <span>25 min focus</span>
        </div>
      </div>

      <div className={styles.sessionDots}>
        <i className={styles.done} />
        <i className={styles.done} />
        <i />
        <i />
      </div>

      <div className={styles.startButton}>
        <Icon name="play" size={10} strokeWidth={2} />
        Start focus
      </div>
      <p className={styles.sessionNote}>Keeps running if the app restarts</p>

      <div className={styles.focusSummary}>
        <div className={styles.focusMetric}>
          <strong>1h 40m</strong>
          <small>Today</small>
        </div>
        <div className={styles.focusMetric}>
          <strong>3</strong>
          <small>Sessions</small>
        </div>
        <div className={styles.focusMetric}>
          <strong>12d</strong>
          <small>Streak</small>
        </div>
      </div>

      <div className={cn(styles.card, styles.goalCard)}>
        <div className={styles.goalTop}>
          <span>Daily goal</span>
          <span>68%</span>
        </div>
        <div className={styles.progressBar}>
          <i style={{ width: "68%" }} />
        </div>
      </div>
    </>
  );
}

function AlarmsScreen() {
  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>Next in 8h 12m</p>
          <h3 className={styles.screenTitle}>Alarms</h3>
        </div>
        <span className={styles.roundButton}>
          <Icon name="plus" size={11} strokeWidth={2.2} />
        </span>
      </div>

      <div className={styles.nextAlarm}>
        <div className={styles.nextTop}>
          <span>Next alarm</span>
          <span>On</span>
        </div>
        <div className={styles.nextTime}>
          07:30 <small>AM</small>
        </div>
        <div className={styles.weekDots}>
          {WEEK.map((day) => (
            <span key={`next-${day.date}`} className={day.date < 6 ? styles.on : ""}>
              {day.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.alarmRow}>
        <span className={styles.alarmTime}>06:45</span>
        <div className={styles.alarmCopy}>
          <p>Wake up</p>
          <small>Weekdays · Math challenge</small>
        </div>
        <span className={cn(styles.toggle, styles.toggleOn)} />
      </div>

      <div className={styles.alarmRow}>
        <span className={styles.alarmTime}>22:10</span>
        <div className={styles.alarmCopy}>
          <p>Wind down</p>
          <small>Every day · Snooze 5 min</small>
        </div>
        <span className={styles.toggle} />
      </div>

      <div className={styles.alarmRow}>
        <span className={styles.alarmTime}>08:30</span>
        <div className={styles.alarmCopy}>
          <p>Weekend walk</p>
          <small>Sat &amp; Sun · One-time</small>
        </div>
        <span className={styles.toggle} />
      </div>

      <div className={styles.mathCard}>
        <Icon name="lock" size={13} strokeWidth={1.9} />
        <div>
          <p>Math challenge is on</p>
          <small>Solve 3 × 8 to dismiss your alarm</small>
        </div>
      </div>
    </>
  );
}

function NotebookScreen() {
  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>6 notes · 2 pinned</p>
          <h3 className={styles.screenTitle}>Notebook</h3>
        </div>
        <span className={styles.roundButton}>
          <Icon name="plus" size={11} strokeWidth={2.2} />
        </span>
      </div>

      <div className={styles.searchBar}>
        <Icon name="search" size={10} strokeWidth={2} />
        Search notes
      </div>

      <div className={styles.groupLabel}>
        <span>Pinned</span>
        <b>2</b>
      </div>

      <div className={styles.noteGrid}>
        <div className={cn(styles.noteCard, styles.noteCardPinned)}>
          <span className={styles.notePin}>
            <Icon name="lock" size={8} strokeWidth={2} />
          </span>
          <p>Weekly review</p>
          <small>What went well, and what to protect next week.</small>
          <span className={styles.noteDate}>Nov 3</span>
        </div>
        <div className={styles.noteCard}>
          <p>Books to read</p>
          <small>Three titles for slower evenings.</small>
          <span className={styles.noteDate}>Nov 1</span>
        </div>
      </div>

      <div className={styles.groupLabel}>
        <span>All notes</span>
        <b>4</b>
      </div>

      <div className={styles.noteListRow}>
        <i />
        <p>Focus session ideas</p>
        <small>Oct 30</small>
      </div>
      <div className={styles.noteListRow}>
        <i style={{ background: "#F59E0B" }} />
        <p>Groceries and errands</p>
        <small>Oct 28</small>
      </div>
      <div className={styles.noteListRow}>
        <i style={{ background: "#B6BAFF" }} />
        <p>Project outline</p>
        <small>Oct 24</small>
      </div>
      <div className={styles.noteListRow}>
        <i style={{ background: "#34D399" }} />
        <p>Ideas for slow mornings</p>
        <small>Oct 20</small>
      </div>
      <div className={styles.noteListRow}>
        <i style={{ background: "#F59E0B" }} />
        <p>Gift ideas</p>
        <small>Oct 18</small>
      </div>

      <div className={styles.trashRow}>
        <Icon name="file-json" size={9} strokeWidth={1.8} />
        3 notes in trash · can be restored
      </div>
    </>
  );
}

function StatsScreen() {
  const bars = [
    { day: "M", value: 42, active: false },
    { day: "T", value: 64, active: false },
    { day: "W", value: 86, active: true },
    { day: "T", value: 55, active: false },
    { day: "F", value: 74, active: false },
    { day: "S", value: 32, active: false },
    { day: "S", value: 20, active: false },
  ];
  const heat = [
    0, 1, 0, 2, 3, 1, 0, 2, 3, 4, 2, 1, 3, 4, 2, 0, 1, 3, 4, 2, 1, 0, 2, 4,
    3, 2, 1, 0,
  ];

  return (
    <>
      <div className={styles.screenHead}>
        <div>
          <p className={styles.eyebrow}>Last 7 days</p>
          <h3 className={styles.screenTitle}>Statistics</h3>
        </div>
        <span className={styles.badge}>+12% focus</span>
      </div>

      <div className={cn(styles.card, styles.chartCard)}>
        <div className={styles.chartTop}>
          <div>
            <small>Focus time</small>
            <strong>9h 20m</strong>
          </div>
          <span className={styles.badge}>This week</span>
        </div>
        <div className={styles.bars}>
          {bars.map((bar, index) => (
            <div key={`${bar.day}-${index}`} className={styles.barCol}>
              <span
                className={cn(styles.bar, bar.active && styles.barActive)}
                style={{ height: `${bar.value}%` }}
              />
              <small>{bar.day}</small>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.statGrid2}>
        <div className={styles.miniStat}>
          <small>Focus sessions</small>
          <strong>17</strong>
        </div>
        <div className={styles.miniStat}>
          <small>Current streak</small>
          <strong>
            <Icon name="flame" size={12} strokeWidth={2} /> 12 days
          </strong>
        </div>
      </div>

      <div className={cn(styles.card, styles.heat)}>
        <div className={styles.heatLabel}>
          <span>Last 4 weeks</span>
          <span>Every day counts</span>
        </div>
        <div className={styles.heatGrid}>
          {heat.map((level, index) => (
            <i key={index} className={level ? styles[`l${level}`] : ""} />
          ))}
        </div>
      </div>

      <div className={cn(styles.card, styles.goalCard)}>
        <div className={styles.goalTop}>
          <span>Weekly goal</span>
          <span>9h 20m / 12h</span>
        </div>
        <div className={styles.progressBar}>
          <i style={{ width: "78%" }} />
        </div>
      </div>
    </>
  );
}

const SCREENS: Record<ScreenVariant, () => React.JSX.Element> = {
  dashboard: DashboardScreen,
  planner: PlannerScreen,
  focus: FocusScreen,
  alarms: AlarmsScreen,
  notebook: NotebookScreen,
  stats: StatsScreen,
};

const ACTIVE_TAB: Record<ScreenVariant, string | null> = {
  dashboard: "dashboard",
  planner: "planner",
  focus: "timer",
  alarms: null,
  notebook: "notebook",
  stats: "stats",
};

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(styles.phone, className)}>
      <div className={styles.screen}>
        {children}
        <span className={styles.notch} aria-hidden="true" />
      </div>
    </div>
  );
}

/** A fully illustrated app screen, drawn in HTML/CSS. Decorative by design. */
export function AppScreen({
  variant = "dashboard",
  className,
}: {
  variant?: ScreenVariant;
  className?: string;
}) {
  const Screen = SCREENS[variant];

  return (
    <PhoneFrame className={className}>
      <div aria-hidden="true" className="flex h-full flex-col">
        <StatusBar />
        <div className={styles.body}>
          <Screen />
        </div>
        <TabBar active={ACTIVE_TAB[variant]} />
      </div>
    </PhoneFrame>
  );
}
