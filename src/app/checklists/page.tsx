"use client"

import React, { useState } from "react"
import { 
  Search, 
  Plus, 
  Filter,
  CheckSquare,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Upload,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
  FileCheck,
  FileX
} from "lucide-react"

const sampleChecklists = [
  {
    id: 1,
    tipo: "Entrega inicial",
    contrato: "CONT-2024/001",
    objeto: "Notebook Dell Latitude 5420",
    responsavel: "João Silva",
    dataChecklist: "2024-01-15",
    status: "Concluído",
    itensVerificados: [
      { item: "Equipamento em perfeito estado", checked: true },
      { item: "Carregador e acessórios completos", checked: true },
      { item: "Software instalado e configurado", checked: true },
      { item: "Termo de responsabilidade assinado", checked: true },
    ],
    termoAssinado: true,
    anexos: ["termo_entrega_001.pdf", "fotos_notebook.zip"],
    observacoes: "Entrega realizada com sucesso, todos os itens verificados.",
  },
  {
    id: 2,
    tipo: "Encerramento",
    contrato: "CONT-2024/002",
    objeto: "Veículo Toyota Corolla",
    responsavel: "Maria Souza",
    dataChecklist: "2024-01-20",
    status: "Pendente",
    itensVerificados: [
      { item: "Vistoria do veículo", checked: true },
      { item: "Documentação em dia", checked: true },
      { item: "Quilometragem registrada", checked: false },
      { item: "Termo de devolução assinado", checked: false },
    ],
    termoAssinado: false,
    anexos: ["vistoria_preliminar.pdf"],
    observacoes: "Aguardando assinatura do termo de devolução.",
  },
  {
    id: 3,
    tipo: "Entrega inicial",
    contrato: "CONT-2024/003",
    objeto: "Smartphone Samsung S23",
    responsavel: "Pedro Santos",
    dataChecklist: "2024-01-25",
    status: "Em andamento",
    itensVerificados: [
      { item: "Aparelho testado e funcionando", checked: true },
      { item: "Acessórios conferidos", checked: true },
      { item: "Configuração inicial realizada", checked: false },
      { item: "Termo de uso assinado", checked: false },
    ],
    termoAssinado: false,
    anexos: [],
    observacoes: "Configuração em andamento pelo setor de TI.",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído":
      return "text-green-700 bg-green-50"
    case "Pendente":
      return "text-yellow-700 bg-yellow-50"
    case "Em andamento":
      return "text-blue-700 bg-blue-50"
    default:
      return "text-gray-700 bg-gray-50"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Concluído":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "Pendente":
      return <Clock className="h-4 w-4 text-yellow-600" />
    case "Em andamento":
      return <FileCheck className="h-4 w-4 text-blue-600" />
    default:
      return null
  }
}

export default function ChecklistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTipo, setSelectedTipo] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Checklists</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie os checklists de entrega e encerramento
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3a63] transition-colors">
          <Plus className="h-5 w-5" />
          Novo Checklist
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
              <p className="text-sm text-gray-500">Concluídos</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pendentes</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <FileCheck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Em andamento</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
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
              placeholder="Buscar checklists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedTipo}
            onChange={(e) => setSelectedTipo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todos os tipos</option>
            <option value="Entrega">Entrega inicial</option>
            <option value="Encerramento">Encerramento</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todos os status</option>
            <option value="Concluído">Concluído</option>
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Mais filtros
          </button>
        </div>
      </div>

      {/* Checklists */}
      <div className="space-y-4">
        {sampleChecklists.map((checklist) => (
          <div
            key={checklist.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-[#0f4c81] transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <CheckSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {checklist.tipo}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {checklist.objeto} | Contrato: {checklist.contrato}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(checklist.status)}`}>
                    {getStatusIcon(checklist.status)}
                    {checklist.status}
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
                          Upload de anexos
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

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Itens verificados:</h4>
                <div className="space-y-2">
                  {checklist.itensVerificados.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {item.checked ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="text-sm text-gray-600">{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    Responsável: {checklist.responsavel}
                  </span>
                  <span className="text-sm text-gray-500">
                    Data: {checklist.dataChecklist}
                  </span>
                </div>
                {checklist.anexos.length > 0 && (
                  <div className="flex items-center gap-2">
                    {checklist.anexos.map((anexo, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        <Download className="h-4 w-4" />
                        {anexo}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {checklist.observacoes && (
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-medium">Observações:</span> {checklist.observacoes}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
