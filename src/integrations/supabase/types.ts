export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          client_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          duration_minutes: number | null
          estimated_cost: number | null
          id: string
          notes: string | null
          scheduled_date: string
          scheduled_time: string | null
          service_type: string | null
          status: string | null
          title: string
          updated_at: string
          vehicle_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_minutes?: number | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          scheduled_date: string
          scheduled_time?: string | null
          service_type?: string | null
          status?: string | null
          title: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_minutes?: number | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          scheduled_date?: string
          scheduled_time?: string | null
          service_type?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          company: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          assigned_to: string | null
          created_at: string
          email: string | null
          id: string
          message: string | null
          name: string
          notes: string | null
          phone: string | null
          responded_at: string | null
          service_type: string | null
          source: string | null
          status: string | null
          updated_at: string
          vehicle_info: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          responded_at?: string | null
          service_type?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
          vehicle_info?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          responded_at?: string | null
          service_type?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
          vehicle_info?: string | null
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          created_at: string
          description: string
          id: string
          invoice_id: string
          quantity: number | null
          sort_order: number | null
          total: number | null
          unit_price: number | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          quantity?: number | null
          sort_order?: number | null
          total?: number | null
          unit_price?: number | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number | null
          sort_order?: number | null
          total?: number | null
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          client_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          due_date: string | null
          id: string
          invoice_number: string
          notes: string | null
          paid_date: string | null
          quote_id: string | null
          status: string | null
          subtotal: number | null
          title: string
          total: number | null
          updated_at: string
          vat: number | null
          vehicle_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          invoice_number: string
          notes?: string | null
          paid_date?: string | null
          quote_id?: string | null
          status?: string | null
          subtotal?: number | null
          title: string
          total?: number | null
          updated_at?: string
          vat?: number | null
          vehicle_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string
          notes?: string | null
          paid_date?: string | null
          quote_id?: string | null
          status?: string | null
          subtotal?: number | null
          title?: string
          total?: number | null
          updated_at?: string
          vat?: number | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_name: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quote_items: {
        Row: {
          created_at: string
          description: string
          id: string
          quantity: number | null
          quote_id: string
          sort_order: number | null
          total: number | null
          unit_price: number | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          quantity?: number | null
          quote_id: string
          sort_order?: number | null
          total?: number | null
          unit_price?: number | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          quantity?: number | null
          quote_id?: string
          sort_order?: number | null
          total?: number | null
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quote_items_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      quotes: {
        Row: {
          client_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          notes: string | null
          quote_number: string
          status: string | null
          subtotal: number | null
          title: string
          total: number | null
          updated_at: string
          valid_until: string | null
          vat: number | null
          vehicle_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          quote_number: string
          status?: string | null
          subtotal?: number | null
          title: string
          total?: number | null
          updated_at?: string
          valid_until?: string | null
          vat?: number | null
          vehicle_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          quote_number?: string
          status?: string | null
          subtotal?: number | null
          title?: string
          total?: number | null
          updated_at?: string
          valid_until?: string | null
          vat?: number | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quotes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotes_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      reminders: {
        Row: {
          client_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          due_date: string
          id: string
          reminder_type: string | null
          sent_at: string | null
          status: string | null
          title: string
          vehicle_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date: string
          id?: string
          reminder_type?: string | null
          sent_at?: string | null
          status?: string | null
          title: string
          vehicle_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string
          id?: string
          reminder_type?: string | null
          sent_at?: string | null
          status?: string | null
          title?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reminders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          appointment_id: string | null
          client_id: string | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          invoice_id: string | null
          labor_cost: number | null
          parts_cost: number | null
          service_type: string | null
          status: string | null
          technician_notes: string | null
          title: string
          total_cost: number | null
          updated_at: string
          vehicle_id: string | null
        }
        Insert: {
          appointment_id?: string | null
          client_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          invoice_id?: string | null
          labor_cost?: number | null
          parts_cost?: number | null
          service_type?: string | null
          status?: string | null
          technician_notes?: string | null
          title: string
          total_cost?: number | null
          updated_at?: string
          vehicle_id?: string | null
        }
        Update: {
          appointment_id?: string | null
          client_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          invoice_id?: string | null
          labor_cost?: number | null
          parts_cost?: number | null
          service_type?: string | null
          status?: string | null
          technician_notes?: string | null
          title?: string
          total_cost?: number | null
          updated_at?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          client_id: string | null
          color: string | null
          created_at: string
          fuel_type: string | null
          id: string
          make: string | null
          model: string | null
          notes: string | null
          registration: string
          updated_at: string
          vin: string | null
          year: number | null
        }
        Insert: {
          client_id?: string | null
          color?: string | null
          created_at?: string
          fuel_type?: string | null
          id?: string
          make?: string | null
          model?: string | null
          notes?: string | null
          registration: string
          updated_at?: string
          vin?: string | null
          year?: number | null
        }
        Update: {
          client_id?: string | null
          color?: string | null
          created_at?: string
          fuel_type?: string | null
          id?: string
          make?: string | null
          model?: string | null
          notes?: string | null
          registration?: string
          updated_at?: string
          vin?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      web_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_name: string
          id: string
          page_path: string | null
          session_id: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_name: string
          id?: string
          page_path?: string | null
          session_id?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_name?: string
          id?: string
          page_path?: string | null
          session_id?: string | null
        }
        Relationships: []
      }
      web_pageviews: {
        Row: {
          created_at: string
          id: string
          ip_hash: string | null
          page_path: string
          page_title: string | null
          referrer: string | null
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          page_path: string
          page_title?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          page_path?: string
          page_title?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "employee" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "employee", "user"],
    },
  },
} as const
