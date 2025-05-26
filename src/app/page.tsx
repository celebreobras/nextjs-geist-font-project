"use client"

import React from "react"
import { 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  FileText,
  DollarSign
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Visão geral do sistema de contratos
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c81]">
            <option>Últimos 30 dias</option>
            <option>Último trimestre</option>
            <option>Último ano</option>
          </select>
          <button className="px-4 py-2 bg-[#0f4c81] text-white rounded-lg text-sm hover:bg-[#0d3a63] transition-colors">
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <span className="px-2.5 py-0.5 text-sm font-medium text-green-700 bg-green-50 rounded-full">
              +12%
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">120</h2>
            <p className="text-sm text-gray-500">Contratos Ativos</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">4 novos</span>
            <span className="text-gray-400">desde o último mês</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <span className="px-2.5 py-0.5 text-sm font-medium text-red-700 bg-red-50 rounded-full">
              Urgente
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">10</h2>
            <p className="text-sm text-gray-500">Contratos Vencendo</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Próximos 30 dias</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="bg-green-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <span className="px-2.5 py-0.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
              Em dia
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">R$ 1.2M</h2>
            <p className="text-sm text-gray-500">Valor Provisionado</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">8.2%</span>
            <span className="text-gray-400">desde o último mês</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="bg-purple-50 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <span className="px-2.5 py-0.5 text-sm font-medium text-yellow-700 bg-yellow-50 rounded-full">
              Pendente
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">5</h2>
            <p className="text-sm text-gray-500">Medições Pendentes</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500" />
            <span className="text-red-500 font-medium">2 atrasadas</span>
            <span className="text-gray-400">este mês</span>
          </div>
        </div>
      </div>

      {/* Recent Activity & Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Contrato #123 atualizado
                  </p>
                  <p className="text-xs text-gray-500">
                    Medição aprovada por João Silva
                  </p>
                </div>
                <span className="text-xs text-gray-400">2h atrás</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 text-sm text-[#0f4c81] hover:text-[#0d3a63] transition-colors">
            Ver todas as atividades
          </button>
        </div>

        {/* Contracts Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Visão Geral de Contratos</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Contratos Ativos</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Contratos Pendentes</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Contratos Encerrados</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-500 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <span className="text-sm font-medium">10%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">45</p>
                <p className="text-xs text-gray-500">Total Contratos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500">Novos este mês</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-xs text-gray-500">Em renovação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
