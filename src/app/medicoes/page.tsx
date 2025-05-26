"use client"

import React, { useState } from "react"
import { 
  Search, 
  Plus, 
  Filter,
  ArrowUpDown,
  FileText,
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  Upload,
  Download,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  AlertCircle
} from "lucide-react"

const sampleMedicoes = [
  {
    id: 1,
    contrato: "CONT-2024/001",
    objeto: "Serviço de Limpeza e Conservação",
    fornecedor: "Clean Services LTDA",
    mes: "Janeiro/2024",
    valorMedido: "R$ 4.500,00",
    validada: true,
    dataValidacao: "2024-01-10",
    validadoPor: "João Silva",
    numeroNotaFiscal: "NF-12345",
    valorNotaFiscal: "R$ 4.500,00",
    statusProvisao: "Confirmada",
    anexos: ["medicao_jan2024.pdf", "nf_12345.pdf"],
  },
  {
    id: 2,
    contrato: "CONT-2024/002",
    objeto: "Locação de Veículos Executivos",
    fornecedor: "AutoFrota Brasil",
    mes: "Janeiro/2024",
    valorMedido: "R$ 9.800,00",
    validada: false,
    dataValidacao: null,
    validadoPor: null,
    numeroNotaFiscal: "",
    valorNotaFiscal: "",
    statusProvisao: "Pendente",
    anexos: ["medicao_jan2024.xlsx"],
  },
  {
    id: 3,
    contrato: "CONT-2024/003",
    objeto: "Consultoria em Engenharia",
    fornecedor: "Eng Solutions",
    mes: "Janeiro/2024",
    valorMedido: "R$ 15.000,00",
    validada: true,
    dataValidacao: "2024-01-15",
    validadoPor: "Maria Souza",
    numeroNotaFiscal: "NF-789",
    valorNotaFiscal: "R$ 15.000,00",
    statusProvisao: "Paga",
    anexos: ["medicao_jan2024.pdf", "nf_789.pdf"],
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Confirmada":
      return "text-green-700 bg-green-50"
    case "Pendente":
      return "text-yellow-700 bg-yellow-50"
    case "Paga":
      return "text-blue-700 bg-blue-50"
    default:
      return "text-gray-700 bg-gray-50"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Confirmada":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "Pendente":
      return <Clock className="h-4 w-4 text-yellow-600" />
    case "Paga":
      return <DollarSign className="h-4 w-4 text-blue-600" />
    default:
      return null
  }
}

export default function MedicoesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medições</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie as medições e provisões dos contratos
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3a63] transition-colors">
          <Plus className="h-5 w-5" />
          Nova Medição
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Medições Validadas</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pendentes de Validação</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Provisionado</p>
              <p className="text-2xl font-bold text-gray-900">R$ 29.300,00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar medições..."
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
            <option value="Confirmada">Confirmada</option>
            <option value="Pendente">Pendente</option>
            <option value="Paga">Paga</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Mais filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <ArrowUpDown className="h-5 w-5" />
            Ordenar
          </button>
        </div>
      </div>

      {/* Measurements List */}
      <div className="space-y-4">
        {sampleMedicoes.map((medicao) => (
          <div
            key={medicao.id}
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
                      {medicao.objeto}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Contrato: {medicao.contrato} | {medicao.fornecedor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(medicao.statusProvisao)}`}>
                    {getStatusIcon(medicao.statusProvisao)}
                    {medicao.statusProvisao}
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
                          <Upload className="h-4 w-4" />
                          Upload de arquivos
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

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Mês Referência</p>
                  <p className="text-sm font-medium text-gray-900">{medicao.mes}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valor Medido</p>
                  <p className="text-sm font-medium text-gray-900">{medicao.valorMedido}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nota Fiscal</p>
                  <p className="text-sm font-medium text-gray-900">
                    {medicao.numeroNotaFiscal || "Pendente"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Validação:</span>
                  {medicao.validada ? (
                    <span className="flex items-center gap-1 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Validada por {medicao.validadoPor} em {medicao.dataValidacao}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-yellow-600">
                      <Clock className="h-4 w-4" />
                      Pendente de validação
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {medicao.anexos.map((anexo, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      <Download className="h-3 w-3" />
                      {anexo}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
