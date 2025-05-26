import { useState, useEffect } from 'react'
import './App.css'
import { checkHealth, getUsers, getTasks, createUser, createTask, User, Task } from './api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react'

function App() {
  const [apiStatus, setApiStatus] = useState<{ status: string; message: string } | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState<User>({ name: '', email: '' })
  const [newTask, setNewTask] = useState<Task>({ title: '', description: '', completed: false, user_id: 1 })

  const checkApiHealth = async () => {
    setLoading(true)
    setApiError(null)
    try {
      const health = await checkHealth()
      setApiStatus(health)
    } catch {
      setApiError('Failed to connect to API. Make sure the backend server is running.')
      setApiStatus(null)
    } finally {
      setLoading(false)
    }
  }

  const loadUsers = async () => {
    setLoading(true)
    try {
      const data = await getUsers()
      setUsers(data)
    } catch {
      setApiError('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  const loadTasks = async () => {
    setLoading(true)
    try {
      const data = await getTasks()
      setTasks(data)
    } catch {
      setApiError('Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const user = await createUser(newUser)
      setUsers([...users, user])
      setNewUser({ name: '', email: '' })
    } catch {
      setApiError('Failed to create user')
    } finally {
      setLoading(false)
    }
  }

  const handleTaskSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const task = await createTask(newTask)
      setTasks([...tasks, task])
      setNewTask({ title: '', description: '', completed: false, user_id: 1 })
    } catch {
      setApiError('Failed to create task')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkApiHealth()
    loadUsers()
    loadTasks()
  }, [])

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">FastAPI + React Example</h1>

        {/* API Status */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold">API Status</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={checkApiHealth} 
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {apiError && (
            <Alert variant="destructive" className="mb-4">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}

          {apiStatus && (
            <Alert className="mb-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Connected to API</AlertTitle>
              <AlertDescription>{apiStatus.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <Tabs defaultValue="users">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User List */}
              <Card>
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>List of users from the API</CardDescription>
                </CardHeader>
                <CardContent>
                  {users.length === 0 ? (
                    <p className="text-muted-foreground">No users found</p>
                  ) : (
                    <div className="space-y-4">
                      {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded-md">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={loadUsers} disabled={loading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </CardFooter>
              </Card>

              {/* Create User Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Create User</CardTitle>
                  <CardDescription>Add a new user to the API</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUserSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Creating...' : 'Create User'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Task List */}
              <Card>
                <CardHeader>
                  <CardTitle>Tasks</CardTitle>
                  <CardDescription>List of tasks from the API</CardDescription>
                </CardHeader>
                <CardContent>
                  {tasks.length === 0 ? (
                    <p className="text-muted-foreground">No tasks found</p>
                  ) : (
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id} className="p-4 border rounded-md">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium">{task.title}</div>
                            <Badge variant={task.completed ? "default" : "outline"}>
                              {task.completed ? 'Completed' : 'Pending'}
                            </Badge>
                          </div>
                          <div className="text-sm mb-2">{task.description}</div>
                          <div className="text-xs text-muted-foreground">User ID: {task.user_id}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={loadTasks} disabled={loading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </CardFooter>
              </Card>

              {/* Create Task Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Create Task</CardTitle>
                  <CardDescription>Add a new task to the API</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTaskSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user_id">User ID</Label>
                      <Input
                        id="user_id"
                        type="number"
                        min="1"
                        value={newTask.user_id}
                        onChange={(e) => setNewTask({ ...newTask, user_id: parseInt(e.target.value) })}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Creating...' : 'Create Task'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
