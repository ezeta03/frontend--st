import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import styles from "../assets/sass/components/Dashboard.module.scss";
import logoGlobalFiber from "../assets/images/svg/globalCompleto.svg";

const Dashboard = () => {
  const [resumen, setResumen] = useState({
    total_atenciones: 0,
    en_reparacion: 0,
    dados_baja: 0,
  });
  const [topCasuisticas, setTopCasuisticas] = useState([]);
  const [estadoDispositivos, setEstadoDispositivos] = useState([]);

  useEffect(() => {
    setResumen({ total_atenciones: 42, en_reparacion: 12, dados_baja: 5 });
    setTopCasuisticas([
      { nombre: "Falla de hardware", cantidad: 15 },
      { nombre: "Virus", cantidad: 10 },
      { nombre: "Problemas de red", cantidad: 8 },
    ]);
    setEstadoDispositivos([
      { estado: "Operativo", cantidad: 25 },
      { estado: "Reparación", cantidad: 12 },
      { estado: "Baja", cantidad: 5 },
    ]);
  }, []);

  const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerMobile}>
        <img src={logoGlobalFiber} />
        <h2 className={styles.subTitle}>Menu</h2>
      </div>

      <h1 className={styles.dashboardTitle}>
        {" "}
        Dashboard de Soporte Técnico (Resúmen)
      </h1>

      <div className={styles.dashboardCards}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Atenciones Totales</p>
          <h2 className={styles.cardValue}>{resumen.total_atenciones}</h2>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>En Reparación</p>
          <h2 className={styles.cardValue}>{resumen.en_reparacion}</h2>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Dados de Baja</p>
          <h2 className={styles.cardValue}>{resumen.dados_baja}</h2>
        </div>
      </div>

      <div className={styles.dashboardCharts}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Top Casuísticas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCasuisticas}>
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cantidad" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Estado de Dispositivos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={estadoDispositivos}
                dataKey="cantidad"
                nameKey="estado"
                outerRadius={100}
                label
              >
                {estadoDispositivos.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
