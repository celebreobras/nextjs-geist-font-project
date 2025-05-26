"use client"

import React, { useState } from "react"
import { 
  Search, 
  Filter, 
  Plus, 
  FileText, 
  MoreVertical,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react"

const sampleContracts = [
  {
    id: 1,
    numero: "CONT-2024/001",
    objeto: "Serviço de Limpeza e Conservação",
    tipo: "Serviço",
    fornecedor: "Clean Services LTDA",
    cnpj: "00.000.000/0001-00",
    area: "Administração",
    centroCusto: "ADM-1001",
    responsavel: "João Silva",
    valorEstimado: "R$ 5.000,00",
    dataInicio: "2024-01-01",
    dataVencimento: "2024-12-31",
    vigencia: 12,
    status: "Vigente",
  },
  {
    id: 2,
    numero: "CONT-2024/002",
    objeto: "Locação de Veículos Executivos",
    tipo: "Locação",
    fornecedor: "AutoFrota Brasil",
    cnpj: "11.111.111/0001-11",
    area: "Frota",
    centroCusto: "FRT-2002",
    responsavel: "Maria Souza",
    valorEstimado: "R$ 10.000,00",
    dataInicio: "2024-02-01",
    dataVencimento: "2025-01-31",
    vigencia: 12,
    status: "Pendente",
  },
  {
    id: 3,
    numero: "CONT-2024/003",
    objeto: "Consultoria em Engenharia",
    tipo: "Serviço",
    fornecedor: "Eng Solutions",
    cnpj: "22.222.222/0001-22",
    area: "Engenharia",
    centroCusto: "ENG-3003",
    responsavel: "Pedro Santos",
    valorEstimado: "R$ 15.000,00",
    dataInicio: "2024-03-01",
    dataVencimento: "2024-08-31",
    vigencia: 6,
    status: "Vigente",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Vigente":
      return "text-green-700 bg-green-50"
    case "Pendente":
      return "text-yellow-700 bg-yellow-50"
    case "Encerrado":
      return "text-gray-700 bg-gray-50"
    default:
      return "text-gray-700 bg-gray-50"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Vigente":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "Pendente":
      return <Clock className="h-4 w-4 text-yellow-600" />
    case "Encerrado":
      return <AlertCircle className="h-4 w-4 text-gray-600" />
    default:
      return null
  }
}

export default function ContratosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contratos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie todos os contratos da empresa
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3a63] transition-colors">
          <Plus className="h-5 w-5" />
          Novo Contrato
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-200">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar contratos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todos os status</option>
            <option value="Vigente">Vigente</option>
            <option value="Pendente">Pendente</option>
            <option value="Encerrado">Encerrado</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Mais filtros
          </button>
        </div>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {sampleContracts.map((contract) => (
          <div
            key={contract.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-[#0f4c81] transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {contract.objeto}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Contrato nº {contract.numero}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(contract.status)}`}>
                    {getStatusIcon(contract.status)}
                    {contract.status}
                  </span>
                  <div className="relative group">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block z-10">
                      <div className="py-1">
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Ver detalhes
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Editar
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
                          <Trash2 className="h-4 w-4" />
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Fornecedor</p>
                  <p className="text-sm font-medium text-gray-900">{contract.fornecedor}</p>
                  <p className="text-xs text-gray-500">CNPJ: {contract.cnpj}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Área / Centro de Custo</p>
                  <p className="text-sm font-medium text-gray-900">{contract.area}</p>
                  <p className="text-xs text-gray-500">{contract.centroCusto}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Responsável</p>
                  <p className="text-sm font-medium text-gray-900">{contract.responsavel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valor Estimado Mensal</p>
                  <p className="text-sm font-medium text-gray-900">{contract.valorEstimado}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                <span>Início: {contract.dataInicio}</span>
                <span>Vencimento: {contract.dataVencimento}</span>
                <span>Vigência: {contract.vigencia} meses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
