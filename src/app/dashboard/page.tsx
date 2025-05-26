"use client"

import React, { useState } from "react"

const dashboardData = {
  contratosAtivos: 120,
  contratosEncerrados: 45,
  contratosVencendoMes: 10,
  valorTotalProvisionado: "R$ 1.200.000",
  contratosSemMedicao: 5,
  contratosSemNotaFiscal: 3,
}

export default function DashboardPage() {
  const [statusFilter, setStatusFilter] = useState("")
  const [centroCustoFilter, setCentroCustoFilter] = useState("")
  const [responsavelFilter, setResponsavelFilter] = useState("")
  const [tipoContratoFilter, setTipoContratoFilter] = useState("")

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#0f4c81]">Dashboard e Relatórios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="bg-blue-800 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Contratos Ativos</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.contratosAtivos}</p>
        </div>
        <div className="bg-green-700 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Contratos Encerrados</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.contratosEncerrados}</p>
        </div>
        <div className="bg-yellow-600 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Contratos Vencendo no Mês</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.contratosVencendoMes}</p>
        </div>
        <div className="bg-red-700 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Valor Total Provisionado</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.valorTotalProvisionado}</p>
        </div>
        <div className="bg-purple-700 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Contratos sem Medição Validada</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.contratosSemMedicao}</p>
        </div>
        <div className="bg-pink-700 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Contratos sem Nota Fiscal</h2>
          <p className="mt-2 text-3xl font-bold">{dashboardData.contratosSemNotaFiscal}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#0f4c81]">Filtros Rápidos</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Status</option>
            <option value="vigente">Vigente</option>
            <option value="pendente">Pendente</option>
            <option value="encerrado">Encerrado</option>
          </select>
          <input
            type="text"
            placeholder="Centro de Custo"
            value={centroCustoFilter}
            onChange={(e) => setCentroCustoFilter(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Responsável"
            value={responsavelFilter}
            onChange={(e) => setResponsavelFilter(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <select
            value={tipoContratoFilter}
            onChange={(e) => setTipoContratoFilter(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Tipo de Contrato</option>
            <option value="servico">Serviço</option>
            <option value="locacao">Locação</option>
            <option value="pj">PJ</option>
          </select>
        </form>
      </div>
    </div>
  )
}
